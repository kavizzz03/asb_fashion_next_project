export type Branch = {
  name: string;
  address: string;
  hours: string;
  region: "Western" | "Southern" | "North Western" | "Eastern" | "Uva" | "Sabaragamuwa";
  mapUrl: string;
};

export const branches: Branch[] = [
  { name: "Aluthgama", address: "No. 11 B, Station Road", hours: "Mon–Sat, 9am–8pm", region: "Western", mapUrl: "https://maps.app.goo.gl/68dAJb7biVyTcjgP7" },
  { name: "Aluthgama Glamour", address: "No. 50A, Galle Road", hours: "Mon–Sat, 9am–8pm", region: "Western", mapUrl: "https://maps.app.goo.gl/enVjmU7gRzjzyDJL7" },
  { name: "Ambalangoda", address: "No. 21, 5th Lane", hours: "Mon–Fri, 9am–8pm", region: "Southern", mapUrl: "https://maps.app.goo.gl/3WwrdUvsBeeaGDBr8" },
  { name: "Ampara", address: "No. 07, Nidahas Mawatha", hours: "Mon–Sun, 10am–8pm", region: "Eastern", mapUrl: "https://maps.app.goo.gl/3E9x9dn7fqAbnu6H6" },
  { name: "Anuradhapura", address: "No. 488/18, Maithreepala Mawatha", hours: "Mon–Sat, 9am–8pm", region: "North Western", mapUrl: "https://maps.app.goo.gl/MEg3euxhge2zi1ar8" },
  { name: "Balangoda", address: "No. 27, Haputale Road", hours: "Mon–Sat, 9am–8pm", region: "Sabaragamuwa", mapUrl: "https://maps.app.goo.gl/xT8x5KyMBUqi7Xig6" },
  { name: "Chilaw", address: "No. 52, Colombo Main Road", hours: "Mon–Sat, 9am–8pm", region: "North Western", mapUrl: "https://maps.app.goo.gl/qzJiunv9jNcjWtuN8" },
  { name: "Kalutara", address: "No. 10, De Silva Road", hours: "Mon–Sat, 9am–8pm", region: "Western", mapUrl: "https://maps.app.goo.gl/NrRrcnTgxUQdr6PdA" },
  { name: "Kuliyapitiya", address: "No. 190, Main Street", hours: "Mon–Sat, 9am–8pm", region: "North Western", mapUrl: "https://maps.app.goo.gl/1mdyUYqVjaawZrBz8" },
  { name: "Matara", address: "No. 32 B/2, Kingswatta", hours: "Mon–Sat, 9am–7pm", region: "Southern", mapUrl: "https://maps.app.goo.gl/zGrbrRrSe6Htttra9" },
  { name: "Matugama", address: "Agalawatta Road", hours: "Mon–Sat, 9am–7pm", region: "Western", mapUrl: "https://maps.app.goo.gl/etC1i4XVEGJtmsXUA" },
  { name: "Monaragala", address: "No. 83/1, Pothuwil Road", hours: "Mon–Sun, 9am–8pm", region: "Uva", mapUrl: "https://maps.app.goo.gl/ayJP2xJNXYnoofww7" },
  { name: "Negombo Glamour", address: "No. 412, Main Street", hours: "Mon–Sat, 9am–8pm", region: "Western", mapUrl: "https://maps.app.goo.gl/PM6YTVxLbJV8XGAq8" },
  { name: "Panadura", address: "No. 478, Aththidiya Road", hours: "Mon–Sat, 9am–8pm", region: "Western", mapUrl: "https://maps.app.goo.gl/CQr7PgCBbKUu1M5o9" },
  { name: "Tangalle", address: "No. 106/A, Tissa Road", hours: "Mon–Sat, 9am–7pm", region: "Southern", mapUrl: "https://maps.app.goo.gl/MU7bGT3pDcVjzCVs9" },
  { name: "Warakapola", address: "No. 97B, Kandy Road", hours: "Mon–Fri, 8am–8pm", region: "Sabaragamuwa", mapUrl: "https://maps.app.goo.gl/Wb44KkhAUgqDWfQo7" },
];

export const regions = Array.from(new Set(branches.map((b) => b.region)));

export const siteInfo = {
  name: "ASB Fashion",
  tagline: "Beyond Tradition",
  founded: 1989,
  branchCount: branches.length,
  phone: "+94 71 905 7057",
  phoneHref: "tel:+94719057057",
  email: "info@asbfashion.com",
  facebook: "https://www.facebook.com/asbfashion",
  developer: {
    company: "Vexel IT",
    lead: "Kavizz",
    domain: "vexelit.xyz",
    url: "https://vexelit.xyz",
  },
};
