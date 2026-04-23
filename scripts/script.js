document.addEventListener('DOMContentLoaded', () => {
    const artists_data = [
        { name: 'MC Tuto', image: "https://i.scdn.co/image/ab676161000051748288b1d944a4aec64c27b0c7", user: "Artista" },
        { name: 'Clayton & Romário', image: 'https://i.scdn.co/image/ab676161000051747888dd0df48712d389428110', user: 'Artista' },
        { name: 'Henrique juliano', image: 'photos/artista-henrique-juliano.jpg', user: 'Artista' },
        { name: 'Hugo & Guilherme', image: 'https://i.scdn.co/image/ab6761610000517411406ddb1eb7ce9e215f373c', user: 'Artista' },
        { name: 'Ana Castela', image: 'https://i.scdn.co/image/ab67616100005174893d346288179a0ba471acc9', user: 'Artista' },
        { name: 'Jorge Mateus', image: 'photos/artista-jorge-mateus.jpg', user: 'Artista' },
        { name: 'Simone Mendes', image: 'https://i.scdn.co/image/ab67616100005174593d890002cd773ab4a9429e', user: 'Artista' },
        { name: 'Zé Neto & Cristiano', image: 'https://i.scdn.co/image/ab6761610000517463c14c754c70c754b127498e', user: "Artista" },
        { name: 'Gustavo Mioto', image: 'https://i.scdn.co/image/ab6761610000517460daaaf8302120100ed362e2', user: 'Artista' },
        { name: 'Luan Santana', image: 'https://i.scdn.co/image/ab6761610000517428a25297f5580906f6be7b79', user: 'Artista' },
        { name: 'Mateus & Kauan', image: 'photos/artista-mateus-kauan.jpg', user: 'Artista' },
        { name: 'Ze Neto', image: 'photos/artista-ze-neto.jpg', user: 'Artista' },
        { name: 'Gusttavo Lima', image: 'https://i.scdn.co/image/ab6761610000517408cacf062848b7318679b1b4', user: 'Artista' },
        { name: 'Israel & Rodolffo', image: 'https://i.scdn.co/image/ab676161000051745b7dd647f0990586f9936c79', user: 'Artista' },
        { name: 'Grupo Menos É Mais', image: 'https://i.scdn.co/image/ab676161000051743f2cb99077dcbee55e3d355a', user: 'Grupo' },
        { name: 'Mc IG', image: 'https://i.scdn.co/image/ab676161000051743ad13d28eee1e6d4c5283d93', user: 'Artista' },
        { name: 'Murilo Huff', image: 'https://i.scdn.co/image/ab676161000051742fd40dfb96a93257ef5e5cbf', user: 'Artista' },
        { name: 'MC LUUKY', image: 'https://i.scdn.co/image/ab67616100005174ec1fef19ee9676f9ce662f39', user: 'Artista' },

        { name: 'Diego & Victor', image: 'https://i.scdn.co/image/ab67616100005174b8db8467c4b43fda888bac0d', user: 'Artistas' },
        { name: 'Lady Gaga', image: 'https://i.scdn.co/image/ab67616100005174aadc18cac8d48124357c38e6', user: 'Artista' },
    ]
    const albums_data = [
        { name: 'Caju', image: 'photos/album-caju.jpg', text: '2024 * Liniker' },
        { name: 'Ao Vivo em Brasilía (Vol.2)', image: 'https://i.scdn.co/image/ab67616d00001e02054262616758b5de368e5bf4', text: '2025 * Clayton & Romário' },
        { name: '333', image: 'https://i.scdn.co/image/ab67616d00001e02996475bce560ead5737dbda1', text: '2024 * Matuê' },
        { name: 'Tubarões (Ao Vivo)', image: 'https://i.scdn.co/image/ab67616d00001e0219253d686d90dda9f8da689f', text: '2025 * Diego & Victor hugo' },
        { name: 'MAYHEM', image: 'https://i.scdn.co/image/ab67616d00001e02b0860cf0a98e09663c82290c', text: '2025 * Lady Gaga' },
        { name: 'O Céu Explica (Ao Vivo)', image: 'photos/album-ceu-explica.jpg', text: '2017 * Henrique & Juliano' },
        { name: 'Check-In (Ao Vivo)', image: 'https://i.scdn.co/image/ab67616d00001e02bce97fd310202839312cbd74', text: '2024 * Jorge e Mateus' },
        { name: 'Escandalo', image: 'photos/album-escandalo.jpg', text: '2024 * Luísa Sonza' },
        { name: 'ASTROWORLD', image: 'https://i.scdn.co/image/ab67616d00001e02daec894c14c0ca42d76eeb32', text: '2018 * Travis Scott' },
        { name: 'HIT ME HARD AND SOFT', image: 'photos/album-hit-me.jpg', text: '2024 * Billie Eilish' },
        { name: 'Nada Como um Dia Após o Outro Dia', image: 'photos/album-racionais.jpg', text: '2002 * Racionais MC' }
    ]
    const artistis_grid = document.querySelector('.artistis-grid')
    const albums_grid = document.querySelector('.albums-grid')
    const albums_search = document.querySelector('.albums-search')
    artists_data.forEach((artists_data_element) => {
        const artistis_card = document.createElement('div')
        artistis_card.classList.add('artistis_card')
        artistis_card.innerHTML = `
        <img class='artistis-photos' src="${artists_data_element.image}" alt="Artist ${artists_data_element.name}">
        <h4>${artists_data_element.name}</h4>
        <p class="music-text-secondary text-grey">${artists_data_element.user}</p>`

        artistis_grid.appendChild(artistis_card)
    })
    albums_data.forEach((albums_data_element) => {
        const albums_card = document.createElement('div')
        const albums_card_section = document.createElement('div')
        albums_card.classList.add('albums-card')
        albums_card_section.classList.add('albums-card-search')
        albums_card.innerHTML = `
        <img class='albums-content albums-photos' src="${albums_data_element.image}" alt="${albums_data_element.name}">
        <h4 class='albums-content'>${albums_data_element.name}</h4>
        <p class='albums-content text-grey'>${albums_data_element.text}</p>`
        albums_card_section.innerHTML = `
        <img class='albums-photos-search' src="${albums_data_element.image}" alt="${albums_data_element.name}">
        <h4 class='albums-photos-search album-search-title'>${albums_data_element.name}</h4>
        <p class='albums-photos-search text-grey album-search-text'>${albums_data_element.text}</p>`
        albums_grid.appendChild(albums_card)
        albums_search.appendChild(albums_card_section)
    })

  
    const btn = document?.querySelectorAll('.btn')
    if (btn) {
        btn.forEach((btn_element) => {
            btn_element.onclick = function () {
                btn_element.classList.toggle('btn-active')
            }
        })
    }

    const ul_menu_text = document?.querySelectorAll('.li-menu-text')
    const item_ul = document.querySelectorAll('.item-ul')
    ul_menu_text.forEach((li_menu_text_element, index) => {
        li_menu_text_element.onclick = function () {
            li_menu_text_element.classList.toggle('li-menu-text-active')
            index.classList.toggle('item-ul-active')
        }
    })
    const ul_navbar_text = document?.querySelectorAll('.li-navbar-text')
    ul_navbar_text.forEach((li_navbar_text_element) => {
        li_navbar_text_element.onclick = function () {
            ul_navbar_text.forEach(el => el.classList.remove('li-navbar-text-active'))
            li_navbar_text_element.classList.add('li-navbar-text-active')
        }
    })


    const btn_two = document.querySelector('.btn-two')
    if (btn_two) {
        btn_two.onclick = function () {
            btn_two.classList.toggle('btn-two-active')
        }
    }
    const search_section = document.querySelector('.search-section')
    const search_text = document.querySelectorAll('.search-text')
    search_text.forEach((search_text_element) => {
        search_text_element.onclick = () => {
            if (search_text) {
                search_section.classList.add('search-section-active')
            }
        }
    })
    const icon_navbar = document.querySelectorAll('.icon-navbar')
    icon_navbar.forEach((icon_navbar_element) => {
        icon_navbar_element.onclick = function () {
            icon_navbar_element.classList.toggle('icon-navbar-active')
        }
    })
 
})
