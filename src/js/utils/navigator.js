// export const preventNavigationDefault = (vista) => {
//     const enlaces = vista.querySelectorAll('a');
//     enlaces.forEach(element => {
//         element.addEventListener('click', (e) => {
//             e.preventDefault();
//         })
//     });
//     return enlaces;
// }

export const navigateTo = (ruta) => {
    window.location.hash = ruta;
}