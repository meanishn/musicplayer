import shortid from 'shortid';

export const musics = [
    {
        id: 1,
        title: 'Noise ghost sound',
        author: 'Anish',
        url: 'http://sampleswap.org/samples-ghost/LOOPING AMBIENCE and NOISE/746[kb]083_pretty-noise-rhythm.wav.mp3'
    },
    {
        id: 2,
        title: 'Robot cricket',
        author: 'Anish',
        url: 'http://sampleswap.org/samples-ghost/LOOPING AMBIENCE and NOISE/717[kb]086_robot-cricket-malfunction.wav.mp3'
    },
        {
        id: 3,
        title: 'crunching',
        author: 'Anish',
        url: 'http://sampleswap.org/samples-ghost/LOOPING AMBIENCE and NOISE/1315[kb]094_crunching-in-snow-loop.wav.mp3'
    },
        {
        id: 4,
        title: 'Noise ghost sound',
        author: 'Anish',
        url: 'http://sampleswap.org/samples-ghost/LOOPING AMBIENCE and NOISE/746[kb]083_pretty-noise-rhythm.wav.mp3'
    },
    {
        id: 5,
        title: 'Robot cricket',
        author: 'Anish',
        url: 'http://sampleswap.org/samples-ghost/LOOPING AMBIENCE and NOISE/717[kb]086_robot-cricket-malfunction.wav.mp3'
    },
        {
        id: 6,
        title: 'crunching',
        author: 'Anish',
        url: 'http://sampleswap.org/samples-ghost/LOOPING AMBIENCE and NOISE/1315[kb]094_crunching-in-snow-loop.wav.mp3'
    },
        {
        id: 7,
        title: 'Noise ghost sound',
        author: 'Anish',
        url: 'http://sampleswap.org/samples-ghost/LOOPING AMBIENCE and NOISE/746[kb]083_pretty-noise-rhythm.wav.mp3'
    },
    {
        id: 8,
        title: 'Robot cricket',
        author: 'Anish',
        url: 'http://sampleswap.org/samples-ghost/LOOPING AMBIENCE and NOISE/717[kb]086_robot-cricket-malfunction.wav.mp3'
    },
        {
        id: 9,
        title: 'crunching',
        author: 'Anish',
        url: 'http://sampleswap.org/samples-ghost/LOOPING AMBIENCE and NOISE/1315[kb]094_crunching-in-snow-loop.wav.mp3'
    },
            {
        id: 10,
        title: 'crunching',
        author: 'Anish',
        url: 'http://sampleswap.org/samples-ghost/LOOPING AMBIENCE and NOISE/1315[kb]094_crunching-in-snow-loop.wav.mp3'
    },
        {
        id: 11,
        title: 'Noise ghost sound',
        author: 'Anish',
        url: 'http://sampleswap.org/samples-ghost/LOOPING AMBIENCE and NOISE/746[kb]083_pretty-noise-rhythm.wav.mp3'
    },
    {
        id: 12,
        title: 'Robot cricket',
        author: 'Anish',
        url: 'http://sampleswap.org/samples-ghost/LOOPING AMBIENCE and NOISE/717[kb]086_robot-cricket-malfunction.wav.mp3'
    },
        {
        id: 13,
        title: 'crunching',
        author: 'Anish',
        url: 'http://sampleswap.org/samples-ghost/LOOPING AMBIENCE and NOISE/1315[kb]094_crunching-in-snow-loop.wav.mp3'
    }
].map(track => {
        track.id = shortid.generate();
        return track;
    }
);