export default function updateTitle(targetList) {
  const check = document.querySelector('.modify-task');
  if (check === null) {
    const inputContainer = document.createElement('div');
    inputContainer.innerHTML = `<input class="" type="text" placeholder="Modify task..."/>
                            <i class="fa fa-check-circle" aria-hidden="true"></i>`;
    inputContainer.className = 'modify-task';
    targetList.appendChild(inputContainer);
  } else {
    const parent = check.parentElement;
    parent.removeChild(check);
  }
}
