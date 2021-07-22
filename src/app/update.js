export default function updateTitle(targetList) {
  const inputContainer = document.createElement('div');
  inputContainer.innerHTML = `<inputclass="" type="text" placeholder="Modify task..."/>
                            < class="fa fa-plus-circle add-icon" aria-hidden="true"`;
  inputContainer.className = 'modify-task';
  targetList.appendChild(inputContainer);
}
