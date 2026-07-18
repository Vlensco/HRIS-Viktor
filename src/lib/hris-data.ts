export type Status = "Aktif" | "Pending" | "Disetujui" | "Ditolak" | "Paid" | "Review";

export const employees = [
  { initials: "AR", name: "Ahmad Rizky", nik: "MMS-0012", role: "Chief Officer", dept: "Marine Operations", status: "Aktif", contract: "PKWTT", location: "MV Samudra Jaya" },
  { initials: "DS", name: "Dewi Sartika", nik: "MMS-0028", role: "HR Specialist", dept: "Human Resources", status: "Aktif", contract: "PKWTT", location: "Jakarta HQ" },
  { initials: "BP", name: "Budi Pratama", nik: "MMS-0041", role: "Second Engineer", dept: "Technical", status: "Aktif", contract: "PKWT", location: "MV Bahari Nusantara" },
  { initials: "RN", name: "Rina Nuraini", nik: "MMS-0056", role: "Payroll Officer", dept: "Finance", status: "Aktif", contract: "PKWTT", location: "Jakarta HQ" },
  { initials: "FS", name: "Fajar Setiawan", nik: "MMS-0063", role: "Able Seaman", dept: "Deck", status: "Aktif", contract: "PKWT", location: "Off-board" },
  { initials: "LA", name: "Lina Amelia", nik: "MMS-0074", role: "Procurement Staff", dept: "Procurement", status: "Aktif", contract: "Probation", location: "Surabaya" },
];

export const approvals = [
  { id: "REQ-2407", person: "Fajar Setiawan", type: "Cuti tahunan", detail: "18–20 Jul · 3 hari", time: "12 menit lalu", status: "Pending" },
  { id: "REQ-2406", person: "Budi Pratama", type: "Lembur", detail: "14 Jul · 4 jam", time: "37 menit lalu", status: "Pending" },
  { id: "REQ-2405", person: "Lina Amelia", type: "Izin", detail: "16 Jul · Keperluan keluarga", time: "1 jam lalu", status: "Pending" },
  { id: "REQ-2404", person: "Ahmad Rizky", type: "Surat keterangan", detail: "Keperluan visa", time: "Kemarin", status: "Review" },
];

export const attendanceRows = [
  { name: "Ahmad Rizky", shift: "On-board", checkIn: "06:01", checkOut: "—", method: "Sign On", status: "Hadir" },
  { name: "Dewi Sartika", shift: "08:00–17:00", checkIn: "07:54", checkOut: "—", method: "GPS + Selfie", status: "Hadir" },
  { name: "Budi Pratama", shift: "On-board", checkIn: "05:58", checkOut: "—", method: "Sign On", status: "Hadir" },
  { name: "Rina Nuraini", shift: "08:00–17:00", checkIn: "08:12", checkOut: "—", method: "Fingerprint", status: "Terlambat" },
  { name: "Fajar Setiawan", shift: "Off-board", checkIn: "—", checkOut: "—", method: "—", status: "Cuti" },
];

export const notifications = [
  { title: "Pengajuan cuti baru", body: "Fajar Setiawan mengajukan cuti 3 hari", time: "12 menit" },
  { title: "Kontrak segera berakhir", body: "3 kontrak berakhir dalam 30 hari", time: "1 jam" },
  { title: "Payroll Juli siap direview", body: "Data kehadiran telah disinkronkan", time: "3 jam" },
];

export const rupiah = (value: number) => new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(value);
