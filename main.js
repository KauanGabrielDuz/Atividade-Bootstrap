// Exemplo: habilitando tooltips globalmente (se você adicionar data-bs-toggle="tooltip" em algum elemento)
document.addEventListener('DOMContentLoaded', () => {
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  tooltipTriggerList.forEach(el => new bootstrap.Tooltip(el))
})
