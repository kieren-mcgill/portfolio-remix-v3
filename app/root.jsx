import {
    Links,
    Meta,
    Outlet,
    Scripts,
} from "@remix-run/react";
import styles from './styles/main.css?url';

export const links = () => [
    { rel: 'stylesheet', href: styles },
];

export function Layout({ children }){
    return (
        <html>
        <head>
            <link
                rel="icon"
                href="data:image/x-icon;base64,AA"
            />
            <Meta />
            <Links />
        </head>
        <body>
        {children}
        <Scripts />
        </body>
        </html>
    );
}

export default function App() {
    return <Outlet />;
}

