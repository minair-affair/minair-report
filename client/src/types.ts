import { WithStyles } from '@material-ui/core/styles';
import { styles } from './styles';

export type StatItem = {
    value: number;
    aqi: number;
    cat: string;
    catIdx: number;
};

export enum AverageLabels {
    'pm2510Minute' = '10 min',
    'pm2530Minute' = '30 min',
    'pm2560Minute' = '1 hr',
    'pm256Hour' = '6 hrs',
    'pm2524Hour' = '24 hrs',
    'pm251Week' = '1 week'
}

export const statLabels = [
    'pm2510Minute',
    'pm2530Minute',
    'pm2560Minute',
    'pm256Hour',
    'pm2524Hour',
    'pm251Week',
] as const;

export const trendLabels = [
    'aqi25',
    'aqi100',
    'temperature',
    'pressure',
    'humidity'
] as const;

export enum TrendLabels {
    'aqi25' = 'AQI 2.5 < 50',
    'aqi100' = 'AQI 10.0 < 50',
    'temperature' = 'Temperature < 75° F',
    'pressure' = 'Pressure < 30hg',
    'humidity' = 'Humidity 40% - 60%'
}

export type DataFrame = {
    id: number,
    humidity: number;
    temperature: number;
    pressure: number;
    timestamp: number;
    pm10: number;
    pm25: number;
    pm100: number;
    umCount03: number;
    umCount05: number;
    umCount10: number;
    umCount25: number;
    umCount50: number;
    umCount100: number;
    aqi25: number;
    aqiCat25: string,
    aqiIdx25: number;
    aqi100: number;
    aqiCat100: string;
    aqiIdx100: number;
};

export type CurrentDataFrame = DataFrame & {
    stats: {
        [key in keyof typeof AverageLabels]: StatItem
    }
};

export type TrendsItem = {
    aqi25: number;
    aqi100: number;
    temperature: number;
    pressure: number;
    humidity: number;
};

export type TrendsFrame = {
    day: TrendsItem;
    week: TrendsItem;
};

export const defaultDataFrame:DataFrame = {
    id: 0,
    humidity: 0,
    temperature: 0,
    pressure: 0,
    timestamp: 0,
    pm10: 0,
    pm25: 0,
    pm100: 0,
    umCount03: 0,
    umCount05: 0,
    umCount10: 0,
    umCount25: 0,
    umCount50: 0,
    umCount100: 0,
    aqi25: 0,
    aqiCat25: '',
    aqiIdx25: 0,
    aqi100: 0,
    aqiCat100: '',
    aqiIdx100: 0
};

export type Fiction = {
    story: string,
    chapter: string
};

export type Media = {
    id: number,
    file: string,
    type: string,
    submittedBy: string,
    order: number,
    poster: string
};

export interface StyledComponent extends WithStyles<typeof styles> {
    useWhite: boolean
}

export interface ComponentProps extends StyledComponent { }

export const chartCategories: Record<string, string> = {
    humidity: 'Humidity %',
    temperature: 'Temperature ° F',
    pressure: 'Pressure hg',
    pm10: 'Particles >=1.0µm: count/dl',
    pm25: 'Particles >=2.5µm: count/dl',
    pm100: 'Particles >=10.0µm: count/dl',
    umCount03: 'Raw PM0.3 in µg/m³',
    umCount05: 'Raw PM0.5 in µg/m³',
    umCount10: 'Raw PM1.0 in µg/m³',
    umCount25: 'Raw PM2.5 in µg/m³',
    umCount50: 'Raw PM5.0 in µg/m³',
    umCount100: 'Raw PM10.0 in µg/m³',
    aqi25: 'Average US EPA PM2.5 AQI',
    aqi100: 'Average US EPA PM10.0 AQI'
};

export type Song = {
    title: string,
    lyrics: string,
    filename: string,
    trackNumber: number,
    icon: string,
};

export type Rect = {
    x: number;
    y: number;
};

export type Video = {
    title: string,
    htmlTitle: string,
    video: string,
    poster: string,
    path: string
};
