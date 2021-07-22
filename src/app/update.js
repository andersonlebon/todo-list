export default function updateTitle(targetList) {
  const check = document.querySelector('.modify-task');
  if (check === null) {
    const inputContainer = document.createElement('div');
    inputContainer.innerHTML = `<input class="" type="text" placeholder="Modify task..."/>
                            <i class="fa fa-check-circle" aria-hidden="true"></i>`;
    inputContainer.className = 'modify-task';
    targetList.appendChild(inputContainer);
    const modify = inputContainer.querySelector('i');
    const input = inputContainer.querySelector('input');
    modify.addEventListener('click', () => {
      const text = input.value;
      console.log(text);
    });
  } else {
    const parent = check.parentElement;
    parent.removeChild(check);
  }
}
