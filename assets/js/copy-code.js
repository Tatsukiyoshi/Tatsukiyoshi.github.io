document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('pre').forEach(codeBlock => {
    const wrapper = document.createElement('div');
    wrapper.style.position = 'relative';

    const button = document.createElement('button');
    button.className = 'copy-code-button';
    button.type = 'button';
    button.innerText = 'Copy';

    codeBlock.parentNode.insertBefore(wrapper, codeBlock);
    wrapper.appendChild(codeBlock);
    wrapper.appendChild(button);

    button.addEventListener('click', async () => {
      const code = codeBlock.querySelector('code').innerText;
      await navigator.clipboard.writeText(code);
      button.innerText = 'Copied!';
      setTimeout(() => {
        button.innerText = 'Copy';
      }, 2000);
    });
  });
});