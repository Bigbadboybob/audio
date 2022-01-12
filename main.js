import Audic, {playAudioFile} from 'audic';

const ding = new Audic('./audio/ding.mp3')
const cash = new Audic('./audio/cash.mp3')

async function playDing() {
    await ding.play();
    ding.addEventListener('ended', async () => {
        await new Promise( resolve => setTimeout(() => resolve(true), 500))
        ding.destroy();
    });
}

async function playCash() {
    await cash.play();
    cash.addEventListener('ended', async () => {
        await new Promise( resolve => setTimeout(() => resolve(true), 500))
        cash.destroy();
    });
}

export {
    playDing, playCash
}