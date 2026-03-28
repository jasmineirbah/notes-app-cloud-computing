const API = 'http://localhost:3000/notes';

let currentId = null;

// LOAD NOTES
async function getNotes() {
  const res = await fetch(API);
  const data = await res.json();

  const container = document.getElementById('notes');
  container.innerHTML = '';

  data.forEach(note => {
    const div = document.createElement('div');
    div.className = 'note';

    div.innerHTML = `
      <h3>${note.judul}</h3>
      <p>${note.isi}</p>
      <small>
        ${new Date(note.tanggal_dibuat).toLocaleDateString('id-ID')}
      </small>
      <button class="edit-btn">Edit</button>
      <button class="delete-btn">Hapus</button>
    `;

    // EDIT BUTTON
    div.querySelector('.edit-btn').addEventListener('click', () => {
      openEdit(note.id, note.judul, note.isi);
    });

    // DELETE BUTTON
    div.querySelector('.delete-btn').addEventListener('click', () => {
      deleteNote(note.id);
    });

    container.appendChild(div);
  });
}

// TAMBAH
async function addNote() {
  const judul = document.getElementById('judul').value;
  const isi = document.getElementById('isi').value;

  await fetch(API, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ judul, isi })
  });

  getNotes();
}

// DELETE
async function deleteNote(id) {
  await fetch(`${API}/${id}`, { method: 'DELETE' });
  getNotes();
}

// OPEN MODAL
function openEdit(id, judul, isi) {
  currentId = id;

  document.getElementById('editJudul').value = judul;
  document.getElementById('editIsi').value = isi;

  document.getElementById('modal').classList.remove('hidden');
}

// CLOSE MODAL
function closeModal() {
  document.getElementById('modal').classList.add('hidden');
}

// UPDATE
async function updateNote() {
  const judul = document.getElementById('editJudul').value;
  const isi = document.getElementById('editIsi').value;

  await fetch(`${API}/${currentId}`, {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ judul, isi })
  });

  closeModal();
  getNotes();
}