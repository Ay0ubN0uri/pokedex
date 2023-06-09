
const colors = [
    '#f5428d',
    '#f54242',
    '#f5a442',
    '#f5d142',
    '#368dff',
    '#41d95d',
    '#9eecff',
    '#b9ffb0',
    '#ffc7ff',
    '#47fced',
    '#b0a8ff',
    '#ff9a9e',
    '#ffaa5c',
    '#ffeb3b',
    '#1de9b6',
    '#8c9eff',
    '#e6c9a8',
    '#ba68c8',
    '#82b1ff',
    '#e57373',
    '#ffb74d',
    '#64b5f6',
    '#ffd54f',
    '#4db6ac',
    '#7986cb',
    '#a1887f',
    '#ff8a80',
    '#ffff00',
    '#ff5722',
    '#4caf50',
    '#f48fb1',
    '#f06292',
    '#d81b60',
    '#c2185b',
    '#880e4f',
    '#ffd180',
    '#ff9800',
    '#ff6d00',
    '#e65100',
    '#bf360c',
    '#a5d6a7',
    '#81c784',
    '#66bb6a',
    '#43a047',
    '#1b5e20',
    '#bdbdbd',
    '#9e9e9e',
    '#757575',
    '#616161',
    '#424242',
    '#212121',
    '#78909c',
    '#546e7a',
    '#37474f',
    '#263238'
];



export const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}