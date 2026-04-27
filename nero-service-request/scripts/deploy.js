import hre from "hardhat";

async function main() {
  const NeroServiceRequestSystem = await hre.ethers.getContractFactory("NeroServiceRequestSystem");
  console.log("Deploying NeroServiceRequestSystem...");
  
  const NeroServiceRequest = await NeroServiceRequestSystem.deploy();
  await NeroServiceRequest.waitForDeployment();

  console.log(`NeroServiceRequestSystem deployed to: ${await NeroServiceRequest.getAddress()}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
