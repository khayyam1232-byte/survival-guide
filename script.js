var overlay = document.createElement('div');
overlay.style.position = 'fixed';
overlay.style.top = '0';
overlay.style.left = '0';
overlay.style.width = '100%';
overlay.style.height = '100%';
overlay.style.backgroundColor = 'blue';
overlay.style.zIndex = '9999';
document.body.appendChild(overlay);

setTimeout(function() {
  overlay.remove();
}, 500);