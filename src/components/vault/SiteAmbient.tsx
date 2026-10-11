import village from "../../assets/heritage/pueblo-village-art.webp.asset.json";
import ceremonial from "../../assets/heritage/pueblo-ceremonial-art.webp.asset.json";
import ruinsAsset from "../../assets/ruins-ambient.webp.asset.json";

export function SiteAmbient() {
  return (
    <div className="site-ambient" aria-hidden="true">
      <img src={ruinsAsset.url} alt="" width={1600} height={839} />
      <div className="ambient-paintings"><img src={village.url} alt="" loading="lazy" /><img src={ceremonial.url} alt="" loading="lazy" /></div>
    </div>
  );
}