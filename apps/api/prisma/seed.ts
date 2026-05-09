import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';


import { FacilityType, PatientStatus, UnitType, UserRole } from '../src/prisma/prisma-enums';

const prisma=new PrismaClient();
const hierarchy:Record<string,string[]>={
'KOOPSUDNAS':['Koopsudnas I','Koopsudnas II','Koopsudnas III','Korpasgat','Kosek IKN','Kosekhanudnas I','Kosek II','Pusdiklathanudnas'],
'KOOPSUD I':['Lanud Halim Perdanakusuma','Lanud Atang Sendjaja','Lanud Soewondo','Lanud Roesmin Nurjadin','Lanud Husein Sastranegara','Lanud Suryadarma','Lanud Supadio','Lanud Maimun Saleh','Lanud Sultan Iskandar Muda','Lanud Raja Fisabilillah','Lanud Sri Mulyono Herlambang','Lanud Raden Sadjad','Lanud Sutan Sjahrir','Lanud H. AS. Hanandjoeddin','Lanud Wiriadinata','Lanud Pangeran M. Bun Yamin','Lanud Sugiri Sukani','Lanud Harry Hadisoemantri','Lanud Hang Nadim'],
'KOOPSUD II':['Lanud Iswahjudi','Lanud Abdul Rachman Saleh','Lanud Sultan Hasanuddin','Lanud Muljono','Lanud Dhomber','Lanud Syamsuddin Noor','Lanud Sam Ratulangi','Lanud Iskandar','Lanud Anang Busra','Lanud Haluoleo','Lanud I Gusti Ngurah Rai','Lanud Tuan Guru Kyai Haji Muhammad Zainudin','Lanud El Tari','Lanud Jenderal Besar Sudirman'],
'KOOPSUD III':['Lanud Silas Papare','Lanud Manuhua','Lanud Johannes Abraham Dimara','Lanud Pattimura','Lanud Leo Wattimena','Lanud Dominicus Dumatubun','Lanud Yohanis Kapiyau'],
'KOPASGAT':['Wing I Pasgat','Wing II Pasgat','Wing III Pasgat','Satuan Bravo 90','Pusdiklat Pasgat'],
'KOHARMATAU':['Depohar 10','Depohar 20','Depohar 30','Depohar 40','Depohar 50','Depohar 60','Depohar 70','Depohar 80'],
'KODIKLATAU':['AAU Kodiklatau','Lanud Adi Sutjipto','Lanud Adisoemarmo','Lanud Sulaiman','Seskoau','Sekkau','Wingdikum','Wingdiktekkal'],
'BALAKPUS':[],'PUSKESAU/DISKESAU':[]};
const facilities=[
{name:'Puskesau/Diskesau',type:FacilityType.PUSKESAU,city:'Jakarta',province:'DKI Jakarta',phone:'021-8709393',services:['Koordinasi Kesehatan','Rujukan','Laporan Nasional']},
{name:'RSPAU dr. S. Hardjolukito',type:FacilityType.RSPAU,city:'Yogyakarta',province:'DI Yogyakarta',phone:'0274-444702',services:['IGD','Spesialis','Radiologi','Rawat Inap']},
{name:'RSAU dr. Esnawan Antariksa',type:FacilityType.RSAU,city:'Jakarta Timur',province:'DKI Jakarta',phone:'021-86613145',services:['IGD','Umum','Gigi','Farmasi']},
{name:'RSAU dr. Moh. Salamun',type:FacilityType.RSAU,city:'Bandung',province:'Jawa Barat',phone:'022-2032090',services:['IGD','Spesialis','Psikologi']},
{name:'Lakesgilutau drg. R. Poerwanto',type:FacilityType.LAKESGILUTAU,city:'Jakarta',province:'DKI Jakarta',phone:'021-7601111',services:['Gigi','Mulut','Bedah Mulut']},
{name:'Lakespra dr. Saryanto',type:FacilityType.LAKESPRA,city:'Jakarta',province:'DKI Jakarta',phone:'021-6545215',services:['Kesehatan Penerbangan','MCU','Fatigue Risk']},
{name:'Lafiau Drs. Rostyan Effendi',type:FacilityType.LAFIAU,city:'Bandung',province:'Jawa Barat',phone:'022-6037475',services:['Farmasi','Produksi Obat','Konsultasi Obat']}];
async function main(){for(const top of Object.keys(hierarchy)){const parent=await prisma.organizationUnit.upsert({where:{name_parentId:{name:top,parentId:null}},update:{},create:{name:top,type:top.includes('PUSKESAU')?UnitType.PUSKESAU:UnitType.KOTAMA,isActive:true}});for(const child of hierarchy[top])await prisma.organizationUnit.upsert({where:{name_parentId:{name:child,parentId:parent.id}},update:{},create:{name:child,parentId:parent.id,type:child.startsWith('Lanud')?UnitType.LANUD:child.startsWith('Wing')?UnitType.WING:child.startsWith('Depohar')?UnitType.DEPOHAR:UnitType.OTHER,isActive:true}})}const puskesau=await prisma.organizationUnit.findFirst({where:{name:'PUSKESAU/DISKESAU'}});for(const f of facilities)await prisma.healthFacility.upsert({where:{id:f.name.toLowerCase().replace(/\W/g,'-')},update:{},create:{id:f.name.toLowerCase().replace(/\W/g,'-'),...f,organizationUnitId:puskesau?.id,address:`Kompleks TNI AU ${f.city}`,operationalHours:'24 jam untuk IGD; poli sesuai jadwal',isActive:true}});const passwordHash=await bcrypt.hash('password',10);const user=await prisma.user.upsert({where:{identityNumber:'198809122010011001'},update:{},create:{identityNumber:'198809122010011001',email:'pasien@telehealth-au.test',phone:'081200000000',passwordHash,role:UserRole.PATIENT,patientProfile:{create:{fullName:'Kapten Tek. Aditya Pratama',status:PatientStatus.PRAJURIT,rank:'Kapten',corps:'Teknik',kotama:'KOOPSUD I',nearestBase:'Lanud Halim Perdanakusuma',bloodType:'O+',allergies:'Debu',emergencyContact:'0812-1111-2222'}}}});await prisma.auditLog.create({data:{actorId:user.id,action:'SEED_DATABASE',resource:'System',metadata:{app:'Telehealth AU'}}});}
main().finally(()=>prisma.$disconnect());
