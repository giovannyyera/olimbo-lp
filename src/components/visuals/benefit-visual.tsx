type BenefitVisualProps = {
  variant: "opportunities" | "automation" | "organization" | "custom";
};

export function BenefitVisual({ variant }: BenefitVisualProps) {
  if (variant === "opportunities") {
    return (
      <div className="benefit-visual benefit-opportunities" aria-hidden="true">
        <span className="benefit-browser" />
        <i className="benefit-pointer">↗</i>
        <b>Contato</b>
      </div>
    );
  }

  if (variant === "automation") {
    return (
      <div className="benefit-visual benefit-automation" aria-hidden="true">
        <span />
        <i />
        <span />
        <i />
        <b>✓</b>
      </div>
    );
  }

  if (variant === "organization") {
    return (
      <div className="benefit-visual benefit-organization" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>
    );
  }

  return (
    <div className="benefit-visual benefit-custom" aria-hidden="true">
      <span />
      <span />
      <span />
      <b>ORBE</b>
    </div>
  );
}
