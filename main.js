let coin = {
    state: 0,
    flip: function () {
        /* 1. Randomly set your coin object's "state" property to be either 
               0 or 1: use "this.state" to access the "state" property on this object.*/
        let coinFlip = Math.random()
        if (coinFlip < .5) {
            this.state = 0
        } else {
            this.state = 1

        }
    },
    toString: function () {
        /* 2. Return the string "Heads" or "Tails", depending on whether
               "this.state" is 0 or 1. */
        let stringToPage = document.createElement('div')
        bodyElement.append(stringToPage)
        if (this.state === 0) {
            stringToPage.append('Heads')
            return 'Heads'
        } else if (this.state === 1) {
            stringToPage.append('Tails')
            return 'Tails'
        }
    },

    toHtml: function () {
        /* 3. Set the properties of this image element to show either face-up
               or face-down, depending on whether this.state is 0 or 1.*/
        const bodyElement = document.querySelector('body')
        let image = document.createElement('img');
        if (this.state === 0) {
            bodyElement.append(image)
            images.src = './assets/images/heads.jpg'
        } else if (this.state === 1) {
            bodyElement.append(image)
            images.src = './assets/images/tails.jpg'
        }
        return image;
    },

    flipTwentyString: function () {
        for (let index = 0; index < 20; index++) {
            this.flip()
            this.toString()

        }
    },
    flipTwentyImage: function () {
        for (let index = 0; index < 20; index++) {
            this.flip()
            this.toHtml()

        }
    }
};