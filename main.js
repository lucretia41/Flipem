let bodyElement = document.querySelector('body')
let imageElement = document.createElement('div')

let coin = {
    state: 0,
    flip: function () {
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
        return this.state = Math.round(Math.random());
    },
    toString: function () {
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
        if (this.state === 0) {
            return 'Heads'
        } else {
            return 'Tails'
        }
    },
    toHTML: function () {
        let image = document.createElement('img');
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
        if (this.state === 0) {
            image.src = 'assets/images/kiwiheads.png'
        } else {
            image.src = 'assets/images/kiwitails.png'
        }
        return image;
    }
};

function displayTwentyFlips() {
    for (index = 0; index < 20; index++) {
        let string = coin.toString()
        coin.flip()
        bodyElement.append(string)
    }
}

displayTwentyFlips()

function displayTwentyImages() {
    for (index = 0; index < 20; index += 1) {
        let img = coin.toHTML();
        coin.flip();
        bodyElement.append(imageElement);
        imageElement.append(img)
    }
}
displayTwentyImages()
//img.style.height = '20px'
//img.style.width = '20px'