function make_album(artist_name:string, album_title: string, tracks?: number){
    let album:{artist:String, title:string, tracks?: number} = {
        artist: artist_name,
        title: album_title,
    };

    if (tracks !== undefined){
        album.tracks = tracks;
    }
    return album;
}

//Calling three functions and creating three variables with different values
let album1= make_album("sabzsals" , "Album title 1")

let album2= make_album("Mahreen","Album title 2")

let album3= make_album("Sania", "Album title 3" , 30)
//printing the values of object created my function

console.log(album1)
console.log(album2)
console.log(album3)