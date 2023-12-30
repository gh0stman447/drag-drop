const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);

function dragstart(event) {
  console.log('start');
  event.target.classList.add('hold');
  setTimeout(() => {
    event.target.classList.add('hide');
  }, 0);
}

function dragend(event) {
  console.log('end');
  event.target.className = 'item';
}

for (const placeholder of placeholders) {
  placeholder.addEventListener('dragover', dragover);
  placeholder.addEventListener('drop', dragdrop);
  placeholder.addEventListener('dragleave', dragleave);
  placeholder.addEventListener('dragenter', dragenter);
}

function dragover(event) {
  event.preventDefault();
}

function dragdrop(event) {
  event.target.append(item);
  event.target.classList.remove('hovered');
}

function dragleave(event) {
  event.target.classList.remove('hovered');
}

function dragenter(event) {
  event.target.classList.add('hovered');
}
