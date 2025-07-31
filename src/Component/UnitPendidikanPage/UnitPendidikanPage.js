import React, { useState } from 'react';
import styles from './UnitPendidikanPage.module.css';

const school = [
  {
    id: 'smp',
    title: 'SMP IT Multimedia',
    shortDesc: 'SMP IT Multimedia berfokus pada penguasaan keahlian di bidang teknologi multimedia dan konten multimedia dalam sistem terdistribusi',
    longDesc: 'Unit pendidikan SMP IT Multimedia AL Fatih adalah unit pendidikan lanjutan untuk santri lulusan sekolah dasar yang melanjutkan di PPM IT Multimedia AL Fatih. Pendidikan pada unit SMP menekankan kepada Al-Qur’an, ilmu dasar agama, bahasa arab & bahasa inggris dan dasar-dasar IT Multimedia',
    image: 'image/unitpendidikan/smp.jpg',
  },
  {
    id: 'smk',
    title: 'SMK IT Multimedia',
    shortDesc: 'SMK IT Multimedia berfokus pada penguasaan keahlian di bidang teknologi multimedia dan konten multimedia dalam sistem terdistribusi',
    longDesc: 'Unit pendidikan SMK IT Multimedia AL Fatih adalah unit pendidikan lanjutan untuk santri lulusan sekolah menengah pertama yang melanjutkan di PPM IT Mutimedia AL Fatih. Pendidikan pada unit SMK menekankan kepada Al-Qur’an, ilmu lanjutan agama , bahasa arab & bahasa inggris dan praktikum IT Multimedia lebih banyak karena memang dipersiapkan untuk siap dalam dunia dakwah dan kerja',
    image: 'image/unitpendidikan/smk.jpg'
  },
  {
    id: 'training',
    title: 'Training Pemrograman',
    shortDesc: 'Training pemrograman adalah unit pendidikan non formal yang diselenggarakan oleh PPM IT Multimedia Al Fatih untuk membekali masyarakat agar lebih familiar dengan Information Teknologi (IT)',
    longDesc: 'Training pemrograman adalah unit pendidikan non formal yang diselenggarakan oleh PPM IT Multimedia AL Fatih untuk membekali masyarakat agar lebih familiar dengan Information Teknologi (IT) dengan melakukan pelatihan – pelatihan pemrograman diantaranya : Pemrograman pembuatan website, Pelatihan video editing, Pelatihan desighn Grafis, Pemrograman berbasis android, dll',
    image: 'image/unitpendidikan/training.jpg'
  },
  {
    id: 'Aktivitas Santri',
    title: 'Aktivitas Santri',
    shortDesc: 'Dalam memenuhi pendidikan di PPM IT Multimedia Al Fatih santri akan memepelajari materi umum kedinasan, Tahfidzul Quran, Praktek IT Mutimedia dan Materi Diniyah / Agama yang kami bagi pembelajarannya',
    longDesc: 'Dalam memenuhi pendidikan di PPM IT Multimedia Al Fatih santri akan memepelajari materi umum kedinasan, Tahfidzul Quran, Praktek IT Mutimedia dan Materi Diniyah / Agama yang kami bagi pembelajarannya sebagai berikut :',
    image: 'image/unitpendidikan/kegiatan.jpg'
  },
];

function UnitPendidikanPage() {
  const [selectedId, setSelectedId] = useState('smp');
  const selectedUnit = school.find(unit => unit.id === selectedId);

  return (
    <div className={styles.container}>
      <div>
        <img src='image/unitpendidikan/hero.jpg' alt='hero'></img>
      </div>
      <h2 className={styles.heading}>UNIT PENDIDIKAN</h2>
      <div className={styles.content}>
        <div className={styles.cards}>
          {school.map(unit => (
            <div
              key={unit.id}
              className={`${styles.card} ${unit.id === selectedId ? styles.active : ''}`}
              onClick={() => setSelectedId(unit.id)}
            >
              <h3>{unit.title}</h3>
              <p>{unit.shortDesc}</p>
            </div>
<<<<<<< HEAD
          ))}
=======

          
>>>>>>> cedf0da8390916af7ea3337e05db6e862e5f3a0b
        </div>
        <div className={styles.details}>
          {selectedUnit?.image && (
            <img src={selectedUnit.image} alt={selectedUnit.title} className={styles.image} />
          )}
          <h3>{selectedUnit.title}</h3>
          <p>{selectedUnit.longDesc}</p>
        </div>
      </div>
    </div>
  );
}

export default UnitPendidikanPage;