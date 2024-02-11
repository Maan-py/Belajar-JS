const pillarsOfIslam = [
  { id: 1, name: "Shahada"},
  { id: 2, name: "Salah"},
  { id: 3, name: "Zakat"},
  { id: 4, name: "Hajj"},
  { id: 5, name: "Sawm"}
];

console.log("Pillars of Islam");
pillarsOfIslam.forEach(pillar => {
  console.log(`${pillar.id}. ${pillar.name}`);
})