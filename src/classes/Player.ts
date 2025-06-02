interface Playable {
    play(): void
    pause(): void
    stop(): void
}

class MusicPlayer implements Playable {

    play(): void {
        console.log("Tocando música!")
    }

    pause(): void {
        console.log("Música pausada!")
    }

    stop(): void {
        console.log("Música parada!")
    }

}

class VideoPlayer implements Playable {
    pause(): void {
        console.log("Video Pausado!")
    }

    play(): void {
        console.log("Reproduzindo video!")
    }

    stop(): void {
         console.log("Vídeo Parado!")
    }
}

const players: Playable[] 
    = [new VideoPlayer(), new MusicPlayer()]

    players.forEach(p => p.play())
    