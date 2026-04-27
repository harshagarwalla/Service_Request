import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("NeroServiceRequestModule", (m) => {
  const NeroServiceRequest = m.contract("NeroServiceRequestSystem");

  return { NeroServiceRequest };
});
