import Image from 'next/image';


export default function Controls() {


return (
    <div className="controls">
            <section className="gb-dpad">
                <div className="touchcon">
                    <div className="touchup" id="touchup"></div>
                    <div className="touchdown" id="touchdown"></div>
                </div>
                <div className="dpad-inner" role="button">
                    <img src="/UpDownSprite.png" className="updownimg"/>
                </div>


            </section>
            <section className="gb-buttons">
            <div className="touchcon horizontal">
                    <div className="touchleft" id="touchleft"></div>
                    <div className="touchright" id="touchright"></div>
                </div>
                <div className="buttons-inner" role="button">
                    <img src="/LeftRight_Sprite.png" className="leftrightimg"/>
                </div>
            </section>
            </div>
)
}

