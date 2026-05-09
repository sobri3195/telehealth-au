export type NeedType='consultation'|'sudden'|'emergency'|'follow_up'|'refill'|'medication'|'referral'|'dental'|'flight_health'|'psychology'|'upload_lab'|'find_facility'|'contact_admin';
export const needOptions:{id:NeedType;title:string;description:string;accent:string}[]=[
{id:'consultation',title:'Saya ingin konsultasi dokter',description:'Konsultasi umum dengan dokter TNI AU.',accent:'bg-skyforce-50 text-skyforce-700'},
{id:'sudden',title:'Saya mengalami keluhan mendadak',description:'Triase cepat untuk keluhan baru.',accent:'bg-amber-50 text-amber-700'},
{id:'emergency',title:'Saya butuh pertolongan darurat',description:'Prioritas merah dan chat darurat.',accent:'bg-red-50 text-red-700'},
{id:'follow_up',title:'Saya ingin kontrol ulang',description:'Lanjutkan konsultasi sebelumnya.',accent:'bg-emerald-50 text-emerald-700'},
{id:'refill',title:'Saya ingin minta resep ulang',description:'Ajukan obat rutin atau resep lama.',accent:'bg-violet-50 text-violet-700'},
{id:'medication',title:'Saya ingin bertanya tentang obat',description:'Tanya dosis, efek samping, dan interaksi.',accent:'bg-cyan-50 text-cyan-700'},
{id:'referral',title:'Saya ingin rujukan ke faskes/RSAU/RSPAU',description:'Siapkan dokumen rujukan.',accent:'bg-indigo-50 text-indigo-700'},
{id:'dental',title:'Saya ingin konsultasi gigi',description:'Keluhan gigi dan mulut.',accent:'bg-teal-50 text-teal-700'},
{id:'flight_health',title:'Saya ingin konsultasi kesehatan penerbangan',description:'Keluhan awak pesawat/personel pendukung.',accent:'bg-blue-50 text-blue-700'},
{id:'psychology',title:'Saya ingin konsultasi psikologi/mental',description:'Dukungan mental rahasia dan aman.',accent:'bg-fuchsia-50 text-fuchsia-700'},
{id:'upload_lab',title:'Saya ingin upload hasil lab/radiologi',description:'Kirim hasil pemeriksaan untuk dibaca dokter.',accent:'bg-slate-100 text-slate-700'},
{id:'find_facility',title:'Saya ingin mencari fasilitas kesehatan TNI AU terdekat',description:'Direktori faskes jajaran.',accent:'bg-lime-50 text-lime-700'},
{id:'contact_admin',title:'Saya ingin menghubungi admin kesehatan satuan',description:'Bantuan administrasi kesehatan.',accent:'bg-orange-50 text-orange-700'}];
export type Question={id:string;label:string;type:'text'|'textarea'|'boolean'|'select'|'file';options?:string[];redFlag?:boolean};
export const questionBank:Record<NeedType,Question[]>={
consultation:[{id:'main',label:'Apa keluhan atau pertanyaan utama Anda?',type:'textarea'},{id:'duration',label:'Sejak kapan dirasakan?',type:'text'},{id:'unit',label:'Lokasi pasien saat ini di satuan/Lanud mana?',type:'text'}],
sudden:[{id:'complaint',label:'Keluhan utama apa?',type:'textarea'},{id:'duration',label:'Sejak kapan?',type:'text'},{id:'fever',label:'Apakah ada demam?',type:'boolean'},{id:'shortness_breath',label:'Apakah ada sesak napas berat?',type:'boolean',redFlag:true},{id:'chest_pain',label:'Apakah ada nyeri dada berat?',type:'boolean',redFlag:true},{id:'unconscious',label:'Apakah ada penurunan kesadaran?',type:'boolean',redFlag:true},{id:'pregnant',label:'Apakah pasien sedang hamil?',type:'boolean'},{id:'history',label:'Apakah ada riwayat penyakit berat?',type:'textarea'},{id:'unit',label:'Lokasi pasien saat ini di satuan/Lanud mana?',type:'text'}],
emergency:[{id:'danger',label:'Pilih kondisi darurat yang paling sesuai',type:'select',options:['Nyeri dada berat','Sesak napas berat','Penurunan kesadaran','Kejang','Perdarahan hebat','Cedera berat','Gejala stroke','Reaksi alergi berat','Percobaan bunuh diri','Kehamilan dengan perdarahan hebat']}],
follow_up:[{id:'doctor',label:'Dokter/konsultasi sebelumnya?',type:'text'},{id:'last_visit',label:'Kapan terakhir kontrol?',type:'text'},{id:'progress',label:'Bagaimana perkembangan keluhan?',type:'textarea'}],
refill:[{id:'medicine',label:'Obat apa yang ingin diulang?',type:'textarea'},{id:'doctor',label:'Siapa dokter sebelumnya?',type:'text'},{id:'last_control',label:'Kapan terakhir kontrol?',type:'text'},{id:'old_rx',label:'Upload resep lama jika ada',type:'file'},{id:'side_effect',label:'Apakah ada efek samping?',type:'textarea'}],
medication:[{id:'medicine',label:'Nama obat yang ditanyakan?',type:'text'},{id:'question',label:'Apa yang ingin ditanyakan?',type:'textarea'}],
referral:[{id:'from',label:'Rujukan dari mana?',type:'text'},{id:'target',label:'Tujuan rujukan yang diinginkan',type:'text'},{id:'diagnosis',label:'Keluhan/diagnosis',type:'textarea'},{id:'document',label:'Upload dokumen pendukung',type:'file'},{id:'facility',label:'Pilih RSAU/RSPAU/faskes tujuan',type:'text'}],
dental:[{id:'complaint',label:'Keluhan gigi/mulut apa?',type:'textarea'},{id:'pain',label:'Skala nyeri 1-10?',type:'text'}],
flight_health:[{id:'status',label:'Status pasien',type:'select',options:['Awak pesawat','Personel pendukung','Siswa','Lainnya']},{id:'complaint',label:'Keluhan terkait penerbangan',type:'textarea'},{id:'mcu',label:'Riwayat medical check-up terakhir',type:'text'},{id:'risks',label:'Ada gangguan penglihatan, pendengaran, vertigo, stres, atau kelelahan?',type:'textarea'}],
psychology:[{id:'concern',label:'Apa yang sedang dirasakan?',type:'textarea'},{id:'self_harm',label:'Apakah ada pikiran menyakiti diri?',type:'boolean',redFlag:true}],
upload_lab:[{id:'document',label:'Upload hasil lab/radiologi',type:'file'},{id:'note',label:'Catatan untuk dokter',type:'textarea'}],
find_facility:[{id:'location',label:'Lokasi Anda saat ini?',type:'text'},{id:'service',label:'Layanan yang dibutuhkan?',type:'text'}],
contact_admin:[{id:'unit',label:'Satuan/Lanud Anda?',type:'text'},{id:'need',label:'Bantuan administrasi apa yang dibutuhkan?',type:'textarea'}]};
export const facilities=[
{name:'RSPAU dr. S. Hardjolukito',type:'RSPAU',city:'Yogyakarta',province:'DI Yogyakarta',phone:'0274-444702',services:['IGD','Spesialis','Radiologi','Rawat Inap']},
{name:'RSAU dr. Esnawan Antariksa',type:'RSAU',city:'Jakarta Timur',province:'DKI Jakarta',phone:'021-86613145',services:['IGD','Umum','Gigi','Farmasi']},
{name:'RSAU dr. Moh. Salamun',type:'RSAU',city:'Bandung',province:'Jawa Barat',phone:'022-2032090',services:['IGD','Spesialis','Psikologi']},
{name:'Lakespra dr. Saryanto',type:'Lakespra',city:'Jakarta',province:'DKI Jakarta',phone:'021-6545215',services:['Kesehatan Penerbangan','MCU']},
{name:'Lakesgilutau drg. R. Poerwanto',type:'Lakesgilutau',city:'Jakarta',province:'DKI Jakarta',phone:'021-7601111',services:['Gigi','Mulut']},
{name:'Puskesau/Diskesau',type:'Pusat Kesehatan',city:'Jakarta',province:'DKI Jakarta',phone:'021-8709393',services:['Komando Kesehatan','Rujukan']}
];
export const topUnits=['KOOPSUDNAS','KOOPSUD I','KOOPSUD II','KOOPSUD III','KOPASGAT','KOHARMATAU','KODIKLATAU','BALAKPUS','PUSKESAU/DISKESAU'];
export const unitChildren:Record<string,string[]>={
'KOOPSUD I':['Lanud Halim Perdanakusuma','Lanud Atang Sendjaja','Lanud Soewondo','Lanud Roesmin Nurjadin','Lanud Husein Sastranegara','Lanud Suryadarma','Lanud Supadio','Lanud Maimun Saleh','Lanud Sultan Iskandar Muda','Lanud Raja Fisabilillah','Lanud Sri Mulyono Herlambang','Lanud Raden Sadjad','Lanud Sutan Sjahrir','Lanud H. AS. Hanandjoeddin','Lanud Wiriadinata','Lanud Pangeran M. Bun Yamin','Lanud Sugiri Sukani','Lanud Harry Hadisoemantri','Lanud Hang Nadim'],
'KOOPSUD II':['Lanud Iswahjudi','Lanud Abdul Rachman Saleh','Lanud Sultan Hasanuddin','Lanud Muljono','Lanud Dhomber','Lanud Syamsuddin Noor','Lanud Sam Ratulangi','Lanud Iskandar','Lanud Anang Busra','Lanud Haluoleo','Lanud I Gusti Ngurah Rai','Lanud Tuan Guru Kyai Haji Muhammad Zainudin','Lanud El Tari','Lanud Jenderal Besar Sudirman'],
'KOOPSUD III':['Lanud Silas Papare','Lanud Manuhua','Lanud Johannes Abraham Dimara','Lanud Pattimura','Lanud Leo Wattimena','Lanud Dominicus Dumatubun','Lanud Yohanis Kapiyau'],
'KOPASGAT':['Wing I Pasgat','Wing II Pasgat','Wing III Pasgat','Satuan Bravo 90','Pusdiklat Pasgat'],
'KOHARMATAU':['Depohar 10','Depohar 20','Depohar 30','Depohar 40','Depohar 50','Depohar 60','Depohar 70','Depohar 80'],
'KOOPSUDNAS':['Koopsudnas I','Koopsudnas II','Koopsudnas III','Korpasgat','Kosek IKN','Kosekhanudnas I','Kosek II','Pusdiklathanudnas'],
'KODIKLATAU':['AAU Kodiklatau','Lanud Adi Sutjipto','Lanud Adisoemarmo','Lanud Sulaiman','Seskoau','Sekkau','Wingdikum','Wingdiktekkal']};
