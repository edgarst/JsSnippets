import { BREAKPOINTS } from './settings'

export class ScrollTo {
    #destinationElement
    #originContainer
    #menuHeight

    constructor(origin, destination, desktopMenuHeight, mobileMenuHeight) {
        this.initSelectors(origin, destination, desktopMenuHeight, mobileMenuHeight)
        this.initListener()
    }

    initSelectors(origin, destination, desktopMenuHeight, mobileMenuHeight) {
        const isDesktop = window.matchMedia(`(min-width: ${BREAKPOINTS.largeDevices}px)`)

        this.#originContainer = document.querySelector(origin)
        this.#destinationElement = document.querySelector(destination)
        this.#menuHeight = isDesktop ? desktopMenuHeight : mobileMenuHeight
    }

    initListener() {
        this.#originContainer?.addEventListener('click', () => {
            const top = this.#destinationElement.offsetTop - this.#menuHeight
            window.scroll({
                top: top,
                behavior: 'smooth'
            })
        })
    }
}
