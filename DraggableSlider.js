export class DraggableSlider {
    #selector
    #slider
    #isDown
    #startX
    #scrollLeft

    constructor(selector = '#draggable-slider') {
        this.#selector = selector

        this.#initSelectors()
        this.#initEvents()
    }

    #initSelectors() {
        this.#slider = document.querySelector(this.#selector)
        this.#isDown = false
    }

    #initEvents() {
        this.#slider.addEventListener('mousedown', (e) => {
            this.#isDown = true
            this.#startX = this.#getPosition(e)
            this.#scrollLeft = this.#slider.scrollLeft
        })

        this.#slider.addEventListener('mouseleave', () => {
            this.#isDown = false
        })

        this.#slider.addEventListener('mouseup', () => {
            this.#isDown = false
        })

        this.#slider.addEventListener('mousemove', (e) => {
            if(!this.#isDown) return
            e.preventDefault()

            const x = this.#getPosition(e)
            const walk = x - this.#startX

            this.#slider.scrollLeft = this.#scrollLeft - walk
        })
    }

    #getPosition(e) {
        return e.pageX - this.#slider.offsetLeft
    }
}
