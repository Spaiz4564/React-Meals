function getSvg(iconName) {
  return svgIcon[iconName]
}

export const svgService = { getSvg }

// in template
/* <div className='icon' dangerouslySetInnerHTML={getSvg('cartIcon')}></div> */

// in methodes
// function getSvg(iconName) {
//     return { __html: svgService.getSvg(iconName) }
//   }

const svgIcon = {
  cartIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>`,
  location:
    '<svg width="12" height="16" viewBox="0 0 12 16" xmlns="http://www.w3.org/2000/svg" fill="#62646a"><g clip-path="url(#clip0)"><path d="M5.38338 15.6772C0.842813 9.09472 0 8.41916 0 6C0 2.68628 2.68628 0 6 0C9.31372 0 12 2.68628 12 6C12 8.41916 11.1572 9.09472 6.61662 15.6772C6.31866 16.1076 5.68131 16.1076 5.38338 15.6772ZM6 8.5C7.38072 8.5 8.5 7.38072 8.5 6C8.5 4.61928 7.38072 3.5 6 3.5C4.61928 3.5 3.5 4.61928 3.5 6C3.5 7.38072 4.61928 8.5 6 8.5Z"></path></g><defs><clipPath id="clip0"><rect width="12" height="16"></rect></clipPath></defs></svg>',
}
