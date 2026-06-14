import { useEffect, useState } from 'react'
import './styles.css'



export default function Footer() {

    const [systemInfo, setSystemInfo] = useState(null)

    useEffect(() => {
        window.electronAPI.getSystemInfo().then(setSystemInfo)
    }, [])


    return (
        <footer className="Footer">
            <span>{systemInfo?.plataforma}</span>
            <span>{systemInfo?.versaoApp}</span>
        </footer>
    )
}