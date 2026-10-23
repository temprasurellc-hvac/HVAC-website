import type { Service } from "../types";
import { acRepair } from "./ac-repair";
import { acInstallation } from "./ac-installation";
import { acMaintenance } from "./ac-maintenance";
import { emergencyAcRepair } from "./emergency-ac-repair";
import { furnaceRepair } from "./furnace-repair";
import { furnaceInstallation } from "./furnace-installation";
import { furnaceMaintenance } from "./furnace-maintenance";
import { heatingRepair } from "./heating-repair";
import { emergencyHeatingRepair } from "./emergency-heating-repair";
import { heatPumpRepair } from "./heat-pump-repair";
import { heatPumpInstallation } from "./heat-pump-installation";
import { heatPumpMaintenance } from "./heat-pump-maintenance";
import { hvacRepair } from "./hvac-repair";
import { hvacInstallation } from "./hvac-installation";
import { hvacMaintenance } from "./hvac-maintenance";
import { thermostatInstallation } from "./thermostat-installation";
import { waterHeaterRepair } from "./water-heater-repair";
import { waterHeaterInstallation } from "./water-heater-installation";
import { humidifierInstallation } from "./humidifier-installation";
import { ductworkRepair } from "./ductwork-repair";
import { ductworkReplacement } from "./ductwork-replacement";
import { serviceAgreements } from "./service-agreements";
import { newHomeHvacInspection } from "./new-home-hvac-inspection";

export const SERVICES: Service[] = [
  acRepair,
  acInstallation,
  acMaintenance,
  emergencyAcRepair,
  furnaceRepair,
  furnaceInstallation,
  furnaceMaintenance,
  heatingRepair,
  emergencyHeatingRepair,
  heatPumpRepair,
  heatPumpInstallation,
  heatPumpMaintenance,
  hvacRepair,
  hvacInstallation,
  hvacMaintenance,
  thermostatInstallation,
  waterHeaterRepair,
  waterHeaterInstallation,
  humidifierInstallation,
  ductworkRepair,
  ductworkReplacement,
  serviceAgreements,
  newHomeHvacInspection,
];
