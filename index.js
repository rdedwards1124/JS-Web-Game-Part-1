
//    Final Result     //

function newImage(url, left, bottom) {
    let object = document.createElement('img')
    object.src = url
    object.style.position = 'fixed'
    object.style.left = left + 'px'     // `${left}px` this works too
    object.style.bottom = bottom + 'px' // `${bottom}px` this works too
    document.body.append(object)
    return object
}

newImage('assets/green-character.gif', 100, 100)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)

newItem('assets/sword.png', 500, 405)
newItem('assets/sheild.png', 165, 185) // NOTE: shield is spelled wrong in the assets file!
newItem('assets/staff.png', 600, 100)



// let sword = document.createElement('img')
// sword.src = 'assets/sword.png'
// sword.position = 'fixed'
// sword.left = '500px'
// sword.bottom = '405px'
// document.body.append(sword)



function newItem(url, left, bottom){
    let object = newImage(url, left, bottom)

    object.addEventListener('dblclick', function() {
        object.remove()
    })
}

//-------------------------------------------------------//
//                  Old Code below                       //
//-------------------------------------------------------//


// let greenCharacter = document.createElement('img')
// greenCharacter.src = 'assets/green-character.gif'
// greenCharacter.style.position = 'fixed'
// greenCharacter.style.left = '100px'
// greenCharacter.style.bottom = '100px'
// document.body.append(greenCharacter) // Adds the image to the page

// let pineTree = document.createElement('img')
// pineTree.src = 'assets/pine-tree.png'
// pineTree.style.position = 'fixed'
// pineTree.style.left = '450px'
// pineTree.style.bottom = '200px'
// document.body.append(pineTree)

// function newImage(url, left, bottom) {
//     let object = document.createElement('img')
//     object.src = url
//     object.style.position = 'fixed'
//     object.style.left = left + 'px'     // `${left}px` this works too
//     object.style.bottom = bottom + 'px' // `${bottom}px` this works too
//     document.body.append(object)
//     // return object                    //guess i dont need this...
//     // object.addEventListener('click', function() {
//     //     object.remove()
//     // })
// }

// newImage('assets/green-character.gif', 100, 100)
// newImage('assets/pine-tree.png', 450, 200)
// newImage('assets/tree.png', 200, 300)
// newImage('assets/pillar.png', 350, 100)
// newImage('assets/crate.png', 150, 200)
// newImage('assets/well.png', 500, 425)

// // Make these apart of the neewImage function instead of making a new one...
// // newImage('assets/sword.png', 500, 405)
// // newImage('assets/sheild.png', 165, 185) // NOTE: shield is spelled wrong in the assets file!
// // newImage('assets/staff.png', 600, 100)



// // let sword = document.createElement('img')
// // sword.src = 'assets/sword.png'
// // sword.position = 'fixed'
// // sword.left = '500px'
// // sword.bottom = '405px'
// // document.body.append(sword)



// function newItem(url, left, bottom){
//     let object = newImage(url, left, bottom)

//     object.addEventListener('dblclick', () => {
//         object.remove()
//     })
// }


// // function newItem(url, left, bottom) {
// //     let item = document.createElement('img')
// //     item.src = url
// //     item.position = 'fixed'
// //     item.left = left + 'px'
// //     item.bottom = bottom + 'px'
// //     document.body.append(item)
// //     return item
    
// //     item.addEventListener('click', function() {
// //         item.remove()
// //     })

// // }

// newItem('assets/sword.png', 500, 405)
// newItem('assets/sheild.png', 165, 185) // NOTE: shield is spelled wrong in the assets file!
// newItem('assets/staff.png', 600, 100)


//--------------------------------------------//
//           QUESTIONS for class!!            //
//--------------------------------------------//

// 1. Why is the solution code the way it is?
//       somewhere in step 5 it gets confusing...

//          object.addEventListener('dblclick', () => {
//              object.remove()
//          })
//                   Also, what the heck is this?!! // () => //



