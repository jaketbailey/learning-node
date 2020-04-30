// const square = function(x) {
//     return x * x
// }

// const square = (x) => x * x

// console.log(square(3))

// const event = {
//     name: 'Christmas Party',
//     printGuestList: function () {
//         console.log('Guest list for', this.name)
//     },
// }

const event = {
    name: 'Christmas Party',
    guestList: ['Jake', 'Heidi', 'Sarah'],
    printGuestList () {
        console.log('Guest list for', this.name)

        this.guestList.forEach((guest) => {console.log(guest, 'is attending', this.name)})
    }
}


event.printGuestList()