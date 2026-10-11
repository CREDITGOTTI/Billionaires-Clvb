import type { CSSProperties } from "react";
import matrixAsset from "../../assets/ybc-matrix-entry.gif.asset.json";
import { MatrixDecode } from "./MatrixDecode";

/** Contemporary mechanical artwork, unrelated to archaeological claims or cultural symbols. */
export function Stargate({ moving }: { moving: boolean }) {
  return <div className={`stargate${moving ? "" : " is-still"}`} aria-hidden="true">
    <div className="stargate__halo" />
    <div className="stargate__rim stargate__rim--outer" />
    <div className="stargate__mechanism">{Array.from({ length: 12 }, (_, index) => <span key={index} style={{ "--segment": index } as CSSProperties}><i /></span>)}</div>
    <div className="stargate__rim stargate__rim--middle" />
    <div className="stargate__rim stargate__rim--inner" />
    <div className="stargate__aperture">
      {moving && <img className="stargate__texture" src={matrixAsset.url} width={245} height={140} alt="" />}
      <div className="stargate__energy" />
      <MatrixDecode />
      <div className="stargate__depth" />
    </div>
    <div className="stargate__particles">{Array.from({ length: 12 }, (_, index) => <i key={index} style={{ "--particle": index } as CSSProperties} />)}</div>
  </div>;
}