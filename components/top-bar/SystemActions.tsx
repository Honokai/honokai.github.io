import NetworkIcon from "../../src/assets/network-wired-symbolic.svg?react";
import ShutdownIcon from "../../src/assets/system-shutdown-symbolic.svg?react";
import VolumeIcon from "../../src/assets/multimedia-volume-control-symbolic.svg?react";

export default function SystemActions() {
  return (
    <div className="system-actions">
      <button className="btn-icon">
        <NetworkIcon />
      </button>
      <button className="btn-icon">
        <VolumeIcon />
      </button>
      <button className="btn-icon">
        <ShutdownIcon />
      </button>
    </div>
  );
}
