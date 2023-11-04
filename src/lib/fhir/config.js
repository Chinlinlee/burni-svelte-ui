const equalSvgStr = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5"><title>equal</title><path d="M19,10H5V8H19V10M19,16H5V14H19V16Z" /></svg>`;
const notEqualSvgStr = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5"><title>not-equal-variant</title><path d="M14.08,4.61L15.92,5.4L14.8,8H19V10H13.95L12.23,14H19V16H11.38L9.92,19.4L8.08,18.61L9.2,16H5V14H10.06L11.77,10H5V8H12.63L14.08,4.61Z" /></svg>`
const greaterThanSvgStr = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5"><title>greater-than</title><path d="M5.5,4.14L4.5,5.86L15,12L4.5,18.14L5.5,19.86L19,12L5.5,4.14Z" /></svg>`;
const lessThanSvgStr = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5"><title>less-than</title><path d="M18.5,4.14L19.5,5.86L8.97,12L19.5,18.14L18.5,19.86L5,12L18.5,4.14Z" /></svg>`;
const greaterThanEqualSvgStr = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5"><title>greater-than-or-equal</title><path d="M6.5,2.27L20,10.14L6.5,18L5.5,16.27L16.03,10.14L5.5,4L6.5,2.27M20,20V22H5V20H20Z" /></svg>`;
const lessThanEqualSvgStr = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5"><title>less-than-or-equal</title><path d="M18.5,2.27L5,10.14L18.5,18L19.5,16.27L8.97,10.14L19.5,4L18.5,2.27M5,20V22H20V20H5Z" /></svg>`;

export default {
    config: {
        "resourceTypes": [
            "Account",
            "ActivityDefinition",
            "AdverseEvent",
            "AllergyIntolerance",
            "Appointment",
            "AppointmentResponse",
            "AuditEvent",
            "Basic",
            "Binary",
            "BiologicallyDerivedProduct",
            "BodyStructure",
            "Bundle",
            "CapabilityStatement",
            "CarePlan",
            "CareTeam",
            "CatalogEntry",
            "ChargeItem",
            "ChargeItemDefinition",
            "Claim",
            "ClaimResponse",
            "ClinicalImpression",
            "CodeSystem",
            "Communication",
            "CommunicationRequest",
            "CompartmentDefinition",
            "Composition",
            "ConceptMap",
            "Condition",
            "Consent",
            "Contract",
            "Coverage",
            "CoverageEligibilityRequest",
            "CoverageEligibilityResponse",
            "DetectedIssue",
            "Device",
            "DeviceDefinition",
            "DeviceMetric",
            "DeviceRequest",
            "DeviceUseStatement",
            "DiagnosticReport",
            "DocumentManifest",
            "DocumentReference",
            "EffectEvidenceSynthesis",
            "Encounter",
            "Endpoint",
            "EnrollmentRequest",
            "EnrollmentResponse",
            "EpisodeOfCare",
            "EventDefinition",
            "Evidence",
            "EvidenceVariable",
            "ExampleScenario",
            "ExplanationOfBenefit",
            "FamilyMemberHistory",
            "Flag",
            "Goal",
            "GraphDefinition",
            "Group",
            "GuidanceResponse",
            "HealthcareService",
            "ImagingStudy",
            "Immunization",
            "ImmunizationEvaluation",
            "ImmunizationRecommendation",
            "ImplementationGuide",
            "InsurancePlan",
            "Invoice",
            "Library",
            "Linkage",
            "List",
            "Location",
            "Measure",
            "MeasureReport",
            "Media",
            "Medication",
            "MedicationAdministration",
            "MedicationDispense",
            "MedicationKnowledge",
            "MedicationRequest",
            "MedicationStatement",
            "MedicinalProduct",
            "MedicinalProductAuthorization",
            "MedicinalProductContraindication",
            "MedicinalProductIndication",
            "MedicinalProductIngredient",
            "MedicinalProductInteraction",
            "MedicinalProductManufactured",
            "MedicinalProductPackaged",
            "MedicinalProductPharmaceutical",
            "MedicinalProductUndesirableEffect",
            "MessageDefinition",
            "MessageHeader",
            "MolecularSequence",
            "NamingSystem",
            "NutritionOrder",
            "Observation",
            "ObservationDefinition",
            "OperationDefinition",
            "OperationOutcome",
            "Organization",
            "OrganizationAffiliation",
            "Patient",
            "PaymentNotice",
            "PaymentReconciliation",
            "Person",
            "PlanDefinition",
            "Practitioner",
            "PractitionerRole",
            "Procedure",
            "Provenance",
            "Questionnaire",
            "QuestionnaireResponse",
            "RelatedPerson",
            "RequestGroup",
            "ResearchDefinition",
            "ResearchElementDefinition",
            "ResearchStudy",
            "ResearchSubject",
            "RiskAssessment",
            "RiskEvidenceSynthesis",
            "Schedule",
            "SearchParameter",
            "ServiceRequest",
            "Slot",
            "Specimen",
            "SpecimenDefinition",
            "StructureDefinition",
            "StructureMap",
            "Subscription",
            "Substance",
            "SubstanceNucleicAcid",
            "SubstancePolymer",
            "SubstanceProtein",
            "SubstanceReferenceInformation",
            "SubstanceSourceMaterial",
            "SubstanceSpecification",
            "SupplyDelivery",
            "SupplyRequest",
            "Task",
            "TerminologyCapabilities",
            "TestReport",
            "TestScript",
            "ValueSet",
            "VerificationResult",
            "VisionPrescription"
        ],
        "searchParameters": {
            "Account": {
                "owner": {
                    "type": "reference",
                    "expression": "owner"
                },
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "period": {
                    "type": "date",
                    "expression": "servicePeriod"
                },
                "subject": {
                    "type": "reference",
                    "expression": "subject"
                },
                "patient": {
                    "type": "reference",
                    "expression": "subject"
                },
                "name": {
                    "type": "string",
                    "expression": "name"
                },
                "type": {
                    "type": "token",
                    "expression": "type"
                },
                "status": {
                    "type": "token",
                    "expression": "status"
                }
            },
            "ActivityDefinition": {
                "date": {
                    "type": "date",
                    "expression": "date"
                },
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "successor": {
                    "type": "reference",
                    "expression": "relatedArtifact.resource"
                },
                "context-type-value": {
                    "type": "composite",
                    "expression": "useContext"
                },
                "jurisdiction": {
                    "type": "token",
                    "expression": "jurisdiction"
                },
                "description": {
                    "type": "string",
                    "expression": "description"
                },
                "derived-from": {
                    "type": "reference",
                    "expression": "relatedArtifact.resource"
                },
                "context-type": {
                    "type": "token",
                    "expression": "useContext.code"
                },
                "predecessor": {
                    "type": "reference",
                    "expression": "relatedArtifact.resource"
                },
                "title": {
                    "type": "string",
                    "expression": "title"
                },
                "composed-of": {
                    "type": "reference",
                    "expression": "relatedArtifact.resource"
                },
                "version": {
                    "type": "token",
                    "expression": "version"
                },
                "url": {
                    "type": "uri",
                    "expression": "url"
                },
                "context-quantity": {
                    "type": "quantity",
                    "expression": "useContext.valueQuantity"
                },
                "effective": {
                    "type": "date",
                    "expression": "effectivePeriod"
                },
                "depends-on": {
                    "type": "reference",
                    "expression": "relatedArtifact.resource"
                },
                "name": {
                    "type": "string",
                    "expression": "name"
                },
                "context": {
                    "type": "token",
                    "expression": "useContext.valueCodeableConcept"
                },
                "publisher": {
                    "type": "string",
                    "expression": "publisher"
                },
                "topic": {
                    "type": "token",
                    "expression": "topic"
                },
                "context-type-quantity": {
                    "type": "composite",
                    "expression": "useContext"
                },
                "status": {
                    "type": "token",
                    "expression": "status"
                }
            },
            "AdverseEvent": {
                "date": {
                    "type": "date",
                    "expression": "date"
                },
                "severity": {
                    "type": "token",
                    "expression": "severity"
                },
                "recorder": {
                    "type": "reference",
                    "expression": "recorder"
                },
                "study": {
                    "type": "reference",
                    "expression": "study"
                },
                "actuality": {
                    "type": "token",
                    "expression": "actuality"
                },
                "seriousness": {
                    "type": "token",
                    "expression": "seriousness"
                },
                "subject": {
                    "type": "reference",
                    "expression": "subject"
                },
                "resultingcondition": {
                    "type": "reference",
                    "expression": "resultingCondition"
                },
                "substance": {
                    "type": "reference",
                    "expression": "suspectEntity.instance"
                },
                "location": {
                    "type": "reference",
                    "expression": "location"
                },
                "category": {
                    "type": "token",
                    "expression": "category"
                },
                "event": {
                    "type": "token",
                    "expression": "event"
                }
            },
            "AllergyIntolerance": {
                "severity": {
                    "type": "token",
                    "expression": "reaction.severity"
                },
                "date": {
                    "type": "date",
                    "expression": "recordedDate"
                },
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "manifestation": {
                    "type": "token",
                    "expression": "reaction.manifestation"
                },
                "recorder": {
                    "type": "reference",
                    "expression": "recorder"
                },
                "code": {
                    "type": "token",
                    "expression": "code"
                },
                "verification-status": {
                    "type": "token",
                    "expression": "verificationStatus"
                },
                "criticality": {
                    "type": "token",
                    "expression": "criticality"
                },
                "clinical-status": {
                    "type": "token",
                    "expression": "clinicalStatus"
                },
                "type": {
                    "type": "token",
                    "expression": "type"
                },
                "onset": {
                    "type": "date",
                    "expression": "reaction.onset"
                },
                "route": {
                    "type": "token",
                    "expression": "reaction.exposureRoute"
                },
                "asserter": {
                    "type": "reference",
                    "expression": "asserter"
                },
                "patient": {
                    "type": "reference",
                    "expression": "patient"
                },
                "category": {
                    "type": "token",
                    "expression": "category"
                },
                "last-date": {
                    "type": "date",
                    "expression": "lastOccurrence"
                }
            },
            "Appointment": {
                "date": {
                    "type": "date",
                    "expression": "start"
                },
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "specialty": {
                    "type": "token",
                    "expression": "specialty"
                },
                "service-category": {
                    "type": "token",
                    "expression": "serviceCategory"
                },
                "practitioner": {
                    "type": "reference",
                    "expression": "participant.actor"
                },
                "part-status": {
                    "type": "token",
                    "expression": "participant.status"
                },
                "appointment-type": {
                    "type": "token",
                    "expression": "appointmentType"
                },
                "service-type": {
                    "type": "token",
                    "expression": "serviceType"
                },
                "slot": {
                    "type": "reference",
                    "expression": "slot"
                },
                "reason-code": {
                    "type": "token",
                    "expression": "reasonCode"
                },
                "actor": {
                    "type": "reference",
                    "expression": "participant.actor"
                },
                "based-on": {
                    "type": "reference",
                    "expression": "basedOn"
                },
                "patient": {
                    "type": "reference",
                    "expression": "participant.actor"
                },
                "reason-reference": {
                    "type": "reference",
                    "expression": "reasonReference"
                },
                "supporting-info": {
                    "type": "reference",
                    "expression": "supportingInformation"
                },
                "location": {
                    "type": "reference",
                    "expression": "participant.actor"
                },
                "status": {
                    "type": "token",
                    "expression": "status"
                }
            },
            "AppointmentResponse": {
                "actor": {
                    "type": "reference",
                    "expression": "actor"
                },
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "practitioner": {
                    "type": "reference",
                    "expression": "actor"
                },
                "part-status": {
                    "type": "token",
                    "expression": "participantStatus"
                },
                "patient": {
                    "type": "reference",
                    "expression": "actor"
                },
                "appointment": {
                    "type": "reference",
                    "expression": "appointment"
                },
                "location": {
                    "type": "reference",
                    "expression": "actor"
                }
            },
            "AuditEvent": {
                "date": {
                    "type": "date",
                    "expression": "recorded"
                },
                "entity-type": {
                    "type": "token",
                    "expression": "entity.type"
                },
                "agent": {
                    "type": "reference",
                    "expression": "agent.who"
                },
                "address": {
                    "type": "string",
                    "expression": "agent.network.address"
                },
                "entity-role": {
                    "type": "token",
                    "expression": "entity.role"
                },
                "source": {
                    "type": "reference",
                    "expression": "source.observer"
                },
                "type": {
                    "type": "token",
                    "expression": "type"
                },
                "altid": {
                    "type": "token",
                    "expression": "agent.altId"
                },
                "site": {
                    "type": "token",
                    "expression": "source.site"
                },
                "agent-name": {
                    "type": "string",
                    "expression": "agent.name"
                },
                "entity-name": {
                    "type": "string",
                    "expression": "entity.name"
                },
                "subtype": {
                    "type": "token",
                    "expression": "subtype"
                },
                "patient": {
                    "type": "reference",
                    "expression": "agent.who"
                },
                "action": {
                    "type": "token",
                    "expression": "action"
                },
                "agent-role": {
                    "type": "token",
                    "expression": "agent.role"
                },
                "entity": {
                    "type": "reference",
                    "expression": "entity.what"
                },
                "outcome": {
                    "type": "token",
                    "expression": "outcome"
                },
                "policy": {
                    "type": "uri",
                    "expression": "agent.policy"
                }
            },
            "Basic": {
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "code": {
                    "type": "token",
                    "expression": "code"
                },
                "subject": {
                    "type": "reference",
                    "expression": "subject"
                },
                "created": {
                    "type": "date",
                    "expression": "created"
                },
                "patient": {
                    "type": "reference",
                    "expression": "subject"
                },
                "author": {
                    "type": "reference",
                    "expression": "author"
                }
            },
            "BodyStructure": {
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "morphology": {
                    "type": "token",
                    "expression": "morphology"
                },
                "patient": {
                    "type": "reference",
                    "expression": "patient"
                },
                "location": {
                    "type": "token",
                    "expression": "location"
                }
            },
            "Bundle": {
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "composition": {
                    "type": "reference",
                    "expression": "entry.resource"
                },
                "type": {
                    "type": "token",
                    "expression": "type"
                },
                "message": {
                    "type": "reference",
                    "expression": "entry.resource"
                },
                "timestamp": {
                    "type": "date",
                    "expression": "timestamp"
                }
            },
            "CapabilityStatement": {
                "date": {
                    "type": "date",
                    "expression": "date"
                },
                "resource-profile": {
                    "type": "reference",
                    "expression": "rest.resource.profile"
                },
                "context-type-value": {
                    "type": "composite",
                    "expression": "useContext"
                },
                "software": {
                    "type": "string",
                    "expression": "software.name"
                },
                "resource": {
                    "type": "token",
                    "expression": "rest.resource.type"
                },
                "jurisdiction": {
                    "type": "token",
                    "expression": "jurisdiction"
                },
                "format": {
                    "type": "token",
                    "expression": "format"
                },
                "description": {
                    "type": "string",
                    "expression": "description"
                },
                "context-type": {
                    "type": "token",
                    "expression": "useContext.code"
                },
                "title": {
                    "type": "string",
                    "expression": "title"
                },
                "fhirversion": {
                    "type": "token",
                    "expression": "version"
                },
                "version": {
                    "type": "token",
                    "expression": "version"
                },
                "url": {
                    "type": "uri",
                    "expression": "url"
                },
                "supported-profile": {
                    "type": "reference",
                    "expression": "rest.resource.supportedProfile"
                },
                "mode": {
                    "type": "token",
                    "expression": "rest.mode"
                },
                "context-quantity": {
                    "type": "quantity",
                    "expression": "useContext.valueQuantity"
                },
                "security-service": {
                    "type": "token",
                    "expression": "rest.security.service"
                },
                "name": {
                    "type": "string",
                    "expression": "name"
                },
                "context": {
                    "type": "token",
                    "expression": "useContext.valueCodeableConcept"
                },
                "publisher": {
                    "type": "string",
                    "expression": "publisher"
                },
                "context-type-quantity": {
                    "type": "composite",
                    "expression": "useContext"
                },
                "guide": {
                    "type": "reference",
                    "expression": "implementationGuide"
                },
                "status": {
                    "type": "token",
                    "expression": "status"
                }
            },
            "CarePlan": {
                "date": {
                    "type": "date",
                    "expression": "period"
                },
                "care-team": {
                    "type": "reference",
                    "expression": "careTeam"
                },
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "performer": {
                    "type": "reference",
                    "expression": "activity.detail.performer"
                },
                "goal": {
                    "type": "reference",
                    "expression": "goal"
                },
                "subject": {
                    "type": "reference",
                    "expression": "subject"
                },
                "replaces": {
                    "type": "reference",
                    "expression": "replaces"
                },
                "instantiates-canonical": {
                    "type": "reference",
                    "expression": "instantiatesCanonical"
                },
                "part-of": {
                    "type": "reference",
                    "expression": "partOf"
                },
                "encounter": {
                    "type": "reference",
                    "expression": "encounter"
                },
                "intent": {
                    "type": "token",
                    "expression": "intent"
                },
                "activity-reference": {
                    "type": "reference",
                    "expression": "activity.reference"
                },
                "condition": {
                    "type": "reference",
                    "expression": "addresses"
                },
                "based-on": {
                    "type": "reference",
                    "expression": "basedOn"
                },
                "patient": {
                    "type": "reference",
                    "expression": "subject"
                },
                "activity-date": {
                    "type": "date",
                    "expression": "activity.detail.scheduledTiming"
                },
                "instantiates-uri": {
                    "type": "uri",
                    "expression": "instantiatesUri"
                },
                "category": {
                    "type": "token",
                    "expression": "category"
                },
                "activity-code": {
                    "type": "token",
                    "expression": "activity.detail.code"
                },
                "status": {
                    "type": "token",
                    "expression": "status"
                }
            },
            "CareTeam": {
                "date": {
                    "type": "date",
                    "expression": "period"
                },
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "patient": {
                    "type": "reference",
                    "expression": "subject"
                },
                "subject": {
                    "type": "reference",
                    "expression": "subject"
                },
                "encounter": {
                    "type": "reference",
                    "expression": "encounter"
                },
                "category": {
                    "type": "token",
                    "expression": "category"
                },
                "participant": {
                    "type": "reference",
                    "expression": "participant.member"
                },
                "status": {
                    "type": "token",
                    "expression": "status"
                }
            },
            "ChargeItem": {
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "performing-organization": {
                    "type": "reference",
                    "expression": "performingOrganization"
                },
                "code": {
                    "type": "token",
                    "expression": "code"
                },
                "quantity": {
                    "type": "quantity",
                    "expression": "quantity"
                },
                "subject": {
                    "type": "reference",
                    "expression": "subject"
                },
                "occurrence": {
                    "type": "date",
                    "expression": "occurrenceDateTime"
                },
                "entered-date": {
                    "type": "date",
                    "expression": "enteredDate"
                },
                "performer-function": {
                    "type": "token",
                    "expression": "performer.function"
                },
                "patient": {
                    "type": "reference",
                    "expression": "subject"
                },
                "factor-override": {
                    "type": "number",
                    "expression": "factorOverride"
                },
                "service": {
                    "type": "reference",
                    "expression": "service"
                },
                "price-override": {
                    "type": "quantity",
                    "expression": "priceOverride"
                },
                "context": {
                    "type": "reference",
                    "expression": "context"
                },
                "enterer": {
                    "type": "reference",
                    "expression": "enterer"
                },
                "performer-actor": {
                    "type": "reference",
                    "expression": "performer.actor"
                },
                "account": {
                    "type": "reference",
                    "expression": "account"
                },
                "requesting-organization": {
                    "type": "reference",
                    "expression": "requestingOrganization"
                }
            },
            "ChargeItemDefinition": {
                "date": {
                    "type": "date",
                    "expression": "date"
                },
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "context-type-value": {
                    "type": "composite",
                    "expression": "useContext"
                },
                "jurisdiction": {
                    "type": "token",
                    "expression": "jurisdiction"
                },
                "description": {
                    "type": "string",
                    "expression": "description"
                },
                "context-type": {
                    "type": "token",
                    "expression": "useContext.code"
                },
                "title": {
                    "type": "string",
                    "expression": "title"
                },
                "version": {
                    "type": "token",
                    "expression": "version"
                },
                "url": {
                    "type": "uri",
                    "expression": "url"
                },
                "context-quantity": {
                    "type": "quantity",
                    "expression": "useContext.valueQuantity"
                },
                "effective": {
                    "type": "date",
                    "expression": "effectivePeriod"
                },
                "context": {
                    "type": "token",
                    "expression": "useContext.valueCodeableConcept"
                },
                "publisher": {
                    "type": "string",
                    "expression": "publisher"
                },
                "context-type-quantity": {
                    "type": "composite",
                    "expression": "useContext"
                },
                "status": {
                    "type": "token",
                    "expression": "status"
                }
            },
            "Claim": {
                "care-team": {
                    "type": "reference",
                    "expression": "careTeam.provider"
                },
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "use": {
                    "type": "token",
                    "expression": "use"
                },
                "created": {
                    "type": "date",
                    "expression": "created"
                },
                "encounter": {
                    "type": "reference",
                    "expression": "item.encounter"
                },
                "priority": {
                    "type": "token",
                    "expression": "priority"
                },
                "payee": {
                    "type": "reference",
                    "expression": "payee.party"
                },
                "provider": {
                    "type": "reference",
                    "expression": "provider"
                },
                "patient": {
                    "type": "reference",
                    "expression": "patient"
                },
                "insurer": {
                    "type": "reference",
                    "expression": "insurer"
                },
                "detail-udi": {
                    "type": "reference",
                    "expression": "item.detail.udi"
                },
                "enterer": {
                    "type": "reference",
                    "expression": "enterer"
                },
                "procedure-udi": {
                    "type": "reference",
                    "expression": "procedure.udi"
                },
                "subdetail-udi": {
                    "type": "reference",
                    "expression": "item.detail.subDetail.udi"
                },
                "facility": {
                    "type": "reference",
                    "expression": "facility"
                },
                "item-udi": {
                    "type": "reference",
                    "expression": "item.udi"
                },
                "status": {
                    "type": "token",
                    "expression": "status"
                }
            },
            "ClaimResponse": {
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "request": {
                    "type": "reference",
                    "expression": "request"
                },
                "disposition": {
                    "type": "string",
                    "expression": "disposition"
                },
                "insurer": {
                    "type": "reference",
                    "expression": "insurer"
                },
                "created": {
                    "type": "date",
                    "expression": "created"
                },
                "patient": {
                    "type": "reference",
                    "expression": "patient"
                },
                "use": {
                    "type": "token",
                    "expression": "use"
                },
                "payment-date": {
                    "type": "date",
                    "expression": "payment.date"
                },
                "outcome": {
                    "type": "token",
                    "expression": "outcome"
                },
                "requestor": {
                    "type": "reference",
                    "expression": "requestor"
                },
                "status": {
                    "type": "token",
                    "expression": "status"
                }
            },
            "ClinicalImpression": {
                "date": {
                    "type": "date",
                    "expression": "date"
                },
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "previous": {
                    "type": "reference",
                    "expression": "previous"
                },
                "finding-code": {
                    "type": "token",
                    "expression": "finding.itemCodeableConcept"
                },
                "assessor": {
                    "type": "reference",
                    "expression": "assessor"
                },
                "subject": {
                    "type": "reference",
                    "expression": "subject"
                },
                "encounter": {
                    "type": "reference",
                    "expression": "encounter"
                },
                "finding-ref": {
                    "type": "reference",
                    "expression": "finding.itemReference"
                },
                "problem": {
                    "type": "reference",
                    "expression": "problem"
                },
                "patient": {
                    "type": "reference",
                    "expression": "subject"
                },
                "supporting-info": {
                    "type": "reference",
                    "expression": "supportingInfo"
                },
                "investigation": {
                    "type": "reference",
                    "expression": "investigation.item"
                },
                "status": {
                    "type": "token",
                    "expression": "status"
                }
            },
            "CodeSystem": {
                "date": {
                    "type": "date",
                    "expression": "date"
                },
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "code": {
                    "type": "token",
                    "expression": "concept.code"
                },
                "context-type-value": {
                    "type": "composite",
                    "expression": "useContext"
                },
                "content-mode": {
                    "type": "token",
                    "expression": "content"
                },
                "jurisdiction": {
                    "type": "token",
                    "expression": "jurisdiction"
                },
                "description": {
                    "type": "string",
                    "expression": "description"
                },
                "context-type": {
                    "type": "token",
                    "expression": "useContext.code"
                },
                "language": {
                    "type": "token",
                    "expression": "concept.designation.language"
                },
                "title": {
                    "type": "string",
                    "expression": "title"
                },
                "version": {
                    "type": "token",
                    "expression": "version"
                },
                "url": {
                    "type": "uri",
                    "expression": "url"
                },
                "context-quantity": {
                    "type": "quantity",
                    "expression": "useContext.valueQuantity"
                },
                "supplements": {
                    "type": "reference",
                    "expression": "supplements"
                },
                "system": {
                    "type": "uri",
                    "expression": "url"
                },
                "name": {
                    "type": "string",
                    "expression": "name"
                },
                "context": {
                    "type": "token",
                    "expression": "useContext.valueCodeableConcept"
                },
                "publisher": {
                    "type": "string",
                    "expression": "publisher"
                },
                "context-type-quantity": {
                    "type": "composite",
                    "expression": "useContext"
                },
                "status": {
                    "type": "token",
                    "expression": "status"
                }
            },
            "Communication": {
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "subject": {
                    "type": "reference",
                    "expression": "subject"
                },
                "instantiates-canonical": {
                    "type": "reference",
                    "expression": "instantiatesCanonical"
                },
                "received": {
                    "type": "date",
                    "expression": "received"
                },
                "part-of": {
                    "type": "reference",
                    "expression": "partOf"
                },
                "medium": {
                    "type": "token",
                    "expression": "medium"
                },
                "encounter": {
                    "type": "reference",
                    "expression": "encounter"
                },
                "sent": {
                    "type": "date",
                    "expression": "sent"
                },
                "based-on": {
                    "type": "reference",
                    "expression": "basedOn"
                },
                "sender": {
                    "type": "reference",
                    "expression": "sender"
                },
                "patient": {
                    "type": "reference",
                    "expression": "subject"
                },
                "recipient": {
                    "type": "reference",
                    "expression": "recipient"
                },
                "instantiates-uri": {
                    "type": "uri",
                    "expression": "instantiatesUri"
                },
                "category": {
                    "type": "token",
                    "expression": "category"
                },
                "status": {
                    "type": "token",
                    "expression": "status"
                }
            },
            "CommunicationRequest": {
                "requester": {
                    "type": "reference",
                    "expression": "requester"
                },
                "authored": {
                    "type": "date",
                    "expression": "authoredOn"
                },
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "subject": {
                    "type": "reference",
                    "expression": "subject"
                },
                "replaces": {
                    "type": "reference",
                    "expression": "replaces"
                },
                "medium": {
                    "type": "token",
                    "expression": "medium"
                },
                "encounter": {
                    "type": "reference",
                    "expression": "encounter"
                },
                "occurrence": {
                    "type": "date",
                    "expression": "occurrenceDateTime"
                },
                "priority": {
                    "type": "token",
                    "expression": "priority"
                },
                "group-identifier": {
                    "type": "token",
                    "expression": "groupIdentifier"
                },
                "based-on": {
                    "type": "reference",
                    "expression": "basedOn"
                },
                "sender": {
                    "type": "reference",
                    "expression": "sender"
                },
                "patient": {
                    "type": "reference",
                    "expression": "subject"
                },
                "recipient": {
                    "type": "reference",
                    "expression": "recipient"
                },
                "category": {
                    "type": "token",
                    "expression": "category"
                },
                "status": {
                    "type": "token",
                    "expression": "status"
                }
            },
            "CompartmentDefinition": {
                "date": {
                    "type": "date",
                    "expression": "date"
                },
                "code": {
                    "type": "token",
                    "expression": "code"
                },
                "context-type-value": {
                    "type": "composite",
                    "expression": "useContext"
                },
                "resource": {
                    "type": "token",
                    "expression": "resource.code"
                },
                "description": {
                    "type": "string",
                    "expression": "description"
                },
                "context-type": {
                    "type": "token",
                    "expression": "useContext.code"
                },
                "version": {
                    "type": "token",
                    "expression": "version"
                },
                "url": {
                    "type": "uri",
                    "expression": "url"
                },
                "context-quantity": {
                    "type": "quantity",
                    "expression": "useContext.valueQuantity"
                },
                "name": {
                    "type": "string",
                    "expression": "name"
                },
                "context": {
                    "type": "token",
                    "expression": "useContext.valueCodeableConcept"
                },
                "publisher": {
                    "type": "string",
                    "expression": "publisher"
                },
                "context-type-quantity": {
                    "type": "composite",
                    "expression": "useContext"
                },
                "status": {
                    "type": "token",
                    "expression": "status"
                }
            },
            "Composition": {
                "date": {
                    "type": "date",
                    "expression": "date"
                },
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "period": {
                    "type": "date",
                    "expression": "event.period"
                },
                "related-id": {
                    "type": "token",
                    "expression": "relatesTo.targetIdentifier"
                },
                "subject": {
                    "type": "reference",
                    "expression": "subject"
                },
                "author": {
                    "type": "reference",
                    "expression": "author"
                },
                "confidentiality": {
                    "type": "token",
                    "expression": "confidentiality"
                },
                "section": {
                    "type": "token",
                    "expression": "section.code"
                },
                "encounter": {
                    "type": "reference",
                    "expression": "encounter"
                },
                "type": {
                    "type": "token",
                    "expression": "type"
                },
                "title": {
                    "type": "string",
                    "expression": "title"
                },
                "attester": {
                    "type": "reference",
                    "expression": "attester.party"
                },
                "entry": {
                    "type": "reference",
                    "expression": "section.entry"
                },
                "related-ref": {
                    "type": "reference",
                    "expression": "relatesTo.targetReference"
                },
                "patient": {
                    "type": "reference",
                    "expression": "subject"
                },
                "context": {
                    "type": "token",
                    "expression": "event.code"
                },
                "category": {
                    "type": "token",
                    "expression": "category"
                },
                "status": {
                    "type": "token",
                    "expression": "status"
                }
            },
            "ConceptMap": {
                "date": {
                    "type": "date",
                    "expression": "date"
                },
                "other": {
                    "type": "reference",
                    "expression": "group.unmapped.url"
                },
                "context-type-value": {
                    "type": "composite",
                    "expression": "useContext"
                },
                "target-system": {
                    "type": "uri",
                    "expression": "group.target"
                },
                "dependson": {
                    "type": "uri",
                    "expression": "group.element.target.dependsOn.property"
                },
                "jurisdiction": {
                    "type": "token",
                    "expression": "jurisdiction"
                },
                "description": {
                    "type": "string",
                    "expression": "description"
                },
                "context-type": {
                    "type": "token",
                    "expression": "useContext.code"
                },
                "source": {
                    "type": "reference",
                    "expression": "sourceCanonical"
                },
                "title": {
                    "type": "string",
                    "expression": "title"
                },
                "context-quantity": {
                    "type": "quantity",
                    "expression": "useContext.valueQuantity"
                },
                "source-uri": {
                    "type": "reference",
                    "expression": "sourceUri"
                },
                "context": {
                    "type": "token",
                    "expression": "useContext.valueCodeableConcept"
                },
                "context-type-quantity": {
                    "type": "composite",
                    "expression": "useContext"
                },
                "source-system": {
                    "type": "uri",
                    "expression": "group.source"
                },
                "target-code": {
                    "type": "token",
                    "expression": "group.element.target.code"
                },
                "target-uri": {
                    "type": "reference",
                    "expression": "targetUri"
                },
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "product": {
                    "type": "uri",
                    "expression": "group.element.target.product.property"
                },
                "version": {
                    "type": "token",
                    "expression": "version"
                },
                "url": {
                    "type": "uri",
                    "expression": "url"
                },
                "target": {
                    "type": "reference",
                    "expression": "targetCanonical"
                },
                "source-code": {
                    "type": "token",
                    "expression": "group.element.code"
                },
                "name": {
                    "type": "string",
                    "expression": "name"
                },
                "publisher": {
                    "type": "string",
                    "expression": "publisher"
                },
                "status": {
                    "type": "token",
                    "expression": "status"
                }
            },
            "Condition": {
                "severity": {
                    "type": "token",
                    "expression": "severity"
                },
                "evidence-detail": {
                    "type": "reference",
                    "expression": "evidence.detail"
                },
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "onset-info": {
                    "type": "string",
                    "expression": "onsetString"
                },
                "recorded-date": {
                    "type": "date",
                    "expression": "recordedDate"
                },
                "code": {
                    "type": "token",
                    "expression": "code"
                },
                "evidence": {
                    "type": "token",
                    "expression": "evidence.code"
                },
                "subject": {
                    "type": "reference",
                    "expression": "subject"
                },
                "verification-status": {
                    "type": "token",
                    "expression": "verificationStatus"
                },
                "clinical-status": {
                    "type": "token",
                    "expression": "clinicalStatus"
                },
                "encounter": {
                    "type": "reference",
                    "expression": "encounter"
                },
                "onset-date": {
                    "type": "date",
                    "expression": "onsetDateTime"
                },
                "abatement-date": {
                    "type": "date",
                    "expression": "abatementDateTime"
                },
                "asserter": {
                    "type": "reference",
                    "expression": "asserter"
                },
                "stage": {
                    "type": "token",
                    "expression": "stage.summary"
                },
                "abatement-string": {
                    "type": "string",
                    "expression": "abatementString"
                },
                "patient": {
                    "type": "reference",
                    "expression": "subject"
                },
                "onset-age": {
                    "type": "quantity",
                    "expression": "onsetAge"
                },
                "abatement-age": {
                    "type": "quantity",
                    "expression": "abatementAge"
                },
                "category": {
                    "type": "token",
                    "expression": "category"
                },
                "body-site": {
                    "type": "token",
                    "expression": "bodySite"
                }
            },
            "Consent": {
                "date": {
                    "type": "date",
                    "expression": "dateTime"
                },
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "period": {
                    "type": "date",
                    "expression": "provision.period"
                },
                "data": {
                    "type": "reference",
                    "expression": "provision.data.reference"
                },
                "purpose": {
                    "type": "token",
                    "expression": "provision.purpose"
                },
                "source-reference": {
                    "type": "reference",
                    "expression": "sourceAttachment"
                },
                "actor": {
                    "type": "reference",
                    "expression": "provision.actor.reference"
                },
                "security-label": {
                    "type": "token",
                    "expression": "provision.securityLabel"
                },
                "patient": {
                    "type": "reference",
                    "expression": "patient"
                },
                "organization": {
                    "type": "reference",
                    "expression": "organization"
                },
                "scope": {
                    "type": "token",
                    "expression": "scope"
                },
                "action": {
                    "type": "token",
                    "expression": "provision.action"
                },
                "consentor": {
                    "type": "reference",
                    "expression": "performer"
                },
                "category": {
                    "type": "token",
                    "expression": "category"
                },
                "status": {
                    "type": "token",
                    "expression": "status"
                }
            },
            "Contract": {
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "instantiates": {
                    "type": "uri",
                    "expression": "instantiatesUri"
                },
                "patient": {
                    "type": "reference",
                    "expression": "subject"
                },
                "subject": {
                    "type": "reference",
                    "expression": "subject"
                },
                "authority": {
                    "type": "reference",
                    "expression": "authority"
                },
                "domain": {
                    "type": "reference",
                    "expression": "domain"
                },
                "issued": {
                    "type": "date",
                    "expression": "issued"
                },
                "url": {
                    "type": "uri",
                    "expression": "url"
                },
                "signer": {
                    "type": "reference",
                    "expression": "signer.party"
                },
                "status": {
                    "type": "token",
                    "expression": "status"
                }
            },
            "Coverage": {
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "payor": {
                    "type": "reference",
                    "expression": "payor"
                },
                "subscriber": {
                    "type": "reference",
                    "expression": "subscriber"
                },
                "beneficiary": {
                    "type": "reference",
                    "expression": "beneficiary"
                },
                "patient": {
                    "type": "reference",
                    "expression": "beneficiary"
                },
                "class-value": {
                    "type": "string",
                    "expression": "class.value"
                },
                "type": {
                    "type": "token",
                    "expression": "type"
                },
                "dependent": {
                    "type": "string",
                    "expression": "dependent"
                },
                "class-type": {
                    "type": "token",
                    "expression": "class.type"
                },
                "policy-holder": {
                    "type": "reference",
                    "expression": "policyHolder"
                },
                "status": {
                    "type": "token",
                    "expression": "status"
                }
            },
            "CoverageEligibilityRequest": {
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "provider": {
                    "type": "reference",
                    "expression": "provider"
                },
                "patient": {
                    "type": "reference",
                    "expression": "patient"
                },
                "created": {
                    "type": "date",
                    "expression": "created"
                },
                "enterer": {
                    "type": "reference",
                    "expression": "enterer"
                },
                "facility": {
                    "type": "reference",
                    "expression": "facility"
                },
                "status": {
                    "type": "token",
                    "expression": "status"
                }
            },
            "CoverageEligibilityResponse": {
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "request": {
                    "type": "reference",
                    "expression": "request"
                },
                "disposition": {
                    "type": "string",
                    "expression": "disposition"
                },
                "patient": {
                    "type": "reference",
                    "expression": "patient"
                },
                "insurer": {
                    "type": "reference",
                    "expression": "insurer"
                },
                "created": {
                    "type": "date",
                    "expression": "created"
                },
                "outcome": {
                    "type": "token",
                    "expression": "outcome"
                },
                "requestor": {
                    "type": "reference",
                    "expression": "requestor"
                },
                "status": {
                    "type": "token",
                    "expression": "status"
                }
            },
            "DetectedIssue": {
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "code": {
                    "type": "token",
                    "expression": "code"
                },
                "identified": {
                    "type": "date",
                    "expression": "identifiedDateTime"
                },
                "patient": {
                    "type": "reference",
                    "expression": "patient"
                },
                "author": {
                    "type": "reference",
                    "expression": "author"
                },
                "implicated": {
                    "type": "reference",
                    "expression": "implicated"
                }
            },
            "Device": {
                "udi-di": {
                    "type": "string",
                    "expression": "udiCarrier"
                },
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "udi-carrier": {
                    "type": "string",
                    "expression": "udiCarrier"
                },
                "device-name": {
                    "type": "string",
                    "expression": "deviceName"
                },
                "patient": {
                    "type": "reference",
                    "expression": "patient"
                },
                "organization": {
                    "type": "reference",
                    "expression": "owner"
                },
                "model": {
                    "type": "string",
                    "expression": "modelNumber"
                },
                "location": {
                    "type": "reference",
                    "expression": "location"
                },
                "type": {
                    "type": "token",
                    "expression": "type"
                },
                "url": {
                    "type": "uri",
                    "expression": "url"
                },
                "manufacturer": {
                    "type": "string",
                    "expression": "manufacturer"
                },
                "status": {
                    "type": "token",
                    "expression": "status"
                }
            },
            "DeviceDefinition": {
                "parent": {
                    "type": "reference",
                    "expression": "parentDevice"
                },
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "type": {
                    "type": "token",
                    "expression": "type"
                }
            },
            "DeviceMetric": {
                "parent": {
                    "type": "reference",
                    "expression": "parent"
                },
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "source": {
                    "type": "reference",
                    "expression": "source"
                },
                "type": {
                    "type": "token",
                    "expression": "type"
                },
                "category": {
                    "type": "token",
                    "expression": "category"
                }
            },
            "DeviceRequest": {
                "requester": {
                    "type": "reference",
                    "expression": "requester"
                },
                "insurance": {
                    "type": "reference",
                    "expression": "insurance"
                },
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "code": {
                    "type": "token",
                    "expression": "codeCodeableConcept"
                },
                "performer": {
                    "type": "reference",
                    "expression": "performer"
                },
                "event-date": {
                    "type": "date",
                    "expression": "occurrenceDateTime"
                },
                "subject": {
                    "type": "reference",
                    "expression": "subject"
                },
                "instantiates-canonical": {
                    "type": "reference",
                    "expression": "instantiatesCanonical"
                },
                "encounter": {
                    "type": "reference",
                    "expression": "encounter"
                },
                "authored-on": {
                    "type": "date",
                    "expression": "authoredOn"
                },
                "intent": {
                    "type": "token",
                    "expression": "intent"
                },
                "group-identifier": {
                    "type": "token",
                    "expression": "groupIdentifier"
                },
                "based-on": {
                    "type": "reference",
                    "expression": "basedOn"
                },
                "patient": {
                    "type": "reference",
                    "expression": "subject"
                },
                "instantiates-uri": {
                    "type": "uri",
                    "expression": "instantiatesUri"
                },
                "prior-request": {
                    "type": "reference",
                    "expression": "priorRequest"
                },
                "device": {
                    "type": "reference",
                    "expression": "codeReference"
                },
                "status": {
                    "type": "token",
                    "expression": "status"
                }
            },
            "DeviceUseStatement": {
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "subject": {
                    "type": "reference",
                    "expression": "subject"
                },
                "patient": {
                    "type": "reference",
                    "expression": "subject"
                },
                "device": {
                    "type": "reference",
                    "expression": "device"
                }
            },
            "DiagnosticReport": {
                "date": {
                    "type": "date",
                    "expression": "effectiveDateTime"
                },
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "performer": {
                    "type": "reference",
                    "expression": "performer"
                },
                "code": {
                    "type": "token",
                    "expression": "code"
                },
                "subject": {
                    "type": "reference",
                    "expression": "subject"
                },
                "media": {
                    "type": "reference",
                    "expression": "media.link"
                },
                "encounter": {
                    "type": "reference",
                    "expression": "encounter"
                },
                "result": {
                    "type": "reference",
                    "expression": "result"
                },
                "conclusion": {
                    "type": "token",
                    "expression": "conclusionCode"
                },
                "based-on": {
                    "type": "reference",
                    "expression": "basedOn"
                },
                "patient": {
                    "type": "reference",
                    "expression": "subject"
                },
                "specimen": {
                    "type": "reference",
                    "expression": "specimen"
                },
                "issued": {
                    "type": "date",
                    "expression": "issued"
                },
                "category": {
                    "type": "token",
                    "expression": "category"
                },
                "results-interpreter": {
                    "type": "reference",
                    "expression": "resultsInterpreter"
                },
                "status": {
                    "type": "token",
                    "expression": "status"
                }
            },
            "DocumentManifest": {
                "identifier": {
                    "type": "token",
                    "expression": "masterIdentifier"
                },
                "item": {
                    "type": "reference",
                    "expression": "content"
                },
                "related-id": {
                    "type": "token",
                    "expression": "related.identifier"
                },
                "subject": {
                    "type": "reference",
                    "expression": "subject"
                },
                "author": {
                    "type": "reference",
                    "expression": "author"
                },
                "created": {
                    "type": "date",
                    "expression": "created"
                },
                "description": {
                    "type": "string",
                    "expression": "description"
                },
                "source": {
                    "type": "uri",
                    "expression": "source"
                },
                "type": {
                    "type": "token",
                    "expression": "type"
                },
                "related-ref": {
                    "type": "reference",
                    "expression": "related.ref"
                },
                "patient": {
                    "type": "reference",
                    "expression": "subject"
                },
                "recipient": {
                    "type": "reference",
                    "expression": "recipient"
                },
                "status": {
                    "type": "token",
                    "expression": "status"
                }
            },
            "DocumentReference": {
                "date": {
                    "type": "date",
                    "expression": "date"
                },
                "subject": {
                    "type": "reference",
                    "expression": "subject"
                },
                "description": {
                    "type": "string",
                    "expression": "description"
                },
                "language": {
                    "type": "token",
                    "expression": "content.attachment.language"
                },
                "type": {
                    "type": "token",
                    "expression": "type"
                },
                "relation": {
                    "type": "token",
                    "expression": "relatesTo.code"
                },
                "setting": {
                    "type": "token",
                    "expression": "context.practiceSetting"
                },
                "related": {
                    "type": "reference",
                    "expression": "context.related"
                },
                "patient": {
                    "type": "reference",
                    "expression": "subject"
                },
                "relationship": {
                    "type": "composite",
                    "expression": "relatesTo"
                },
                "event": {
                    "type": "token",
                    "expression": "context.event"
                },
                "authenticator": {
                    "type": "reference",
                    "expression": "authenticator"
                },
                "identifier": {
                    "type": "token",
                    "expression": "masterIdentifier"
                },
                "period": {
                    "type": "date",
                    "expression": "context.period"
                },
                "custodian": {
                    "type": "reference",
                    "expression": "custodian"
                },
                "author": {
                    "type": "reference",
                    "expression": "author"
                },
                "format": {
                    "type": "token",
                    "expression": "content.format"
                },
                "encounter": {
                    "type": "reference",
                    "expression": "context.encounter"
                },
                "contenttype": {
                    "type": "token",
                    "expression": "content.attachment.contentType"
                },
                "security-label": {
                    "type": "token",
                    "expression": "securityLabel"
                },
                "location": {
                    "type": "uri",
                    "expression": "content.attachment.url"
                },
                "category": {
                    "type": "token",
                    "expression": "category"
                },
                "relatesto": {
                    "type": "reference",
                    "expression": "relatesTo.target"
                },
                "facility": {
                    "type": "token",
                    "expression": "context.facilityType"
                },
                "status": {
                    "type": "token",
                    "expression": "status"
                }
            },
            "EffectEvidenceSynthesis": {
                "date": {
                    "type": "date",
                    "expression": "date"
                },
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "context-type-value": {
                    "type": "composite",
                    "expression": "useContext"
                },
                "jurisdiction": {
                    "type": "token",
                    "expression": "jurisdiction"
                },
                "description": {
                    "type": "string",
                    "expression": "description"
                },
                "context-type": {
                    "type": "token",
                    "expression": "useContext.code"
                },
                "title": {
                    "type": "string",
                    "expression": "title"
                },
                "version": {
                    "type": "token",
                    "expression": "version"
                },
                "url": {
                    "type": "uri",
                    "expression": "url"
                },
                "context-quantity": {
                    "type": "quantity",
                    "expression": "useContext.valueQuantity"
                },
                "effective": {
                    "type": "date",
                    "expression": "effectivePeriod"
                },
                "name": {
                    "type": "string",
                    "expression": "name"
                },
                "context": {
                    "type": "token",
                    "expression": "useContext.valueCodeableConcept"
                },
                "publisher": {
                    "type": "string",
                    "expression": "publisher"
                },
                "context-type-quantity": {
                    "type": "composite",
                    "expression": "useContext"
                },
                "status": {
                    "type": "token",
                    "expression": "status"
                }
            },
            "Encounter": {
                "date": {
                    "type": "date",
                    "expression": "period"
                },
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "participant-type": {
                    "type": "token",
                    "expression": "participant.type"
                },
                "practitioner": {
                    "type": "reference",
                    "expression": "participant.individual"
                },
                "subject": {
                    "type": "reference",
                    "expression": "subject"
                },
                "length": {
                    "type": "quantity",
                    "expression": "length"
                },
                "episode-of-care": {
                    "type": "reference",
                    "expression": "episodeOfCare"
                },
                "diagnosis": {
                    "type": "reference",
                    "expression": "diagnosis.condition"
                },
                "appointment": {
                    "type": "reference",
                    "expression": "appointment"
                },
                "part-of": {
                    "type": "reference",
                    "expression": "partOf"
                },
                "type": {
                    "type": "token",
                    "expression": "type"
                },
                "reason-code": {
                    "type": "token",
                    "expression": "reasonCode"
                },
                "participant": {
                    "type": "reference",
                    "expression": "participant.individual"
                },
                "based-on": {
                    "type": "reference",
                    "expression": "basedOn"
                },
                "patient": {
                    "type": "reference",
                    "expression": "subject"
                },
                "reason-reference": {
                    "type": "reference",
                    "expression": "reasonReference"
                },
                "location-period": {
                    "type": "date",
                    "expression": "location.period"
                },
                "location": {
                    "type": "reference",
                    "expression": "location.location"
                },
                "service-provider": {
                    "type": "reference",
                    "expression": "serviceProvider"
                },
                "special-arrangement": {
                    "type": "token",
                    "expression": "hospitalization.specialArrangement"
                },
                "class": {
                    "type": "token",
                    "expression": "class"
                },
                "account": {
                    "type": "reference",
                    "expression": "account"
                },
                "status": {
                    "type": "token",
                    "expression": "status"
                }
            },
            "Endpoint": {
                "payload-type": {
                    "type": "token",
                    "expression": "payloadType"
                },
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "organization": {
                    "type": "reference",
                    "expression": "managingOrganization"
                },
                "connection-type": {
                    "type": "token",
                    "expression": "connectionType"
                },
                "name": {
                    "type": "string",
                    "expression": "name"
                },
                "status": {
                    "type": "token",
                    "expression": "status"
                }
            },
            "EnrollmentRequest": {
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "subject": {
                    "type": "reference",
                    "expression": "candidate"
                },
                "patient": {
                    "type": "reference",
                    "expression": "candidate"
                },
                "status": {
                    "type": "token",
                    "expression": "status"
                }
            },
            "EnrollmentResponse": {
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "request": {
                    "type": "reference",
                    "expression": "request"
                },
                "status": {
                    "type": "token",
                    "expression": "status"
                }
            },
            "EpisodeOfCare": {
                "date": {
                    "type": "date",
                    "expression": "period"
                },
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "condition": {
                    "type": "reference",
                    "expression": "diagnosis.condition"
                },
                "patient": {
                    "type": "reference",
                    "expression": "patient"
                },
                "organization": {
                    "type": "reference",
                    "expression": "managingOrganization"
                },
                "type": {
                    "type": "token",
                    "expression": "type"
                },
                "care-manager": {
                    "type": "reference",
                    "expression": "careManager"
                },
                "status": {
                    "type": "token",
                    "expression": "status"
                },
                "incoming-referral": {
                    "type": "reference",
                    "expression": "referralRequest"
                }
            },
            "EventDefinition": {
                "date": {
                    "type": "date",
                    "expression": "date"
                },
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "successor": {
                    "type": "reference",
                    "expression": "relatedArtifact.resource"
                },
                "context-type-value": {
                    "type": "composite",
                    "expression": "useContext"
                },
                "jurisdiction": {
                    "type": "token",
                    "expression": "jurisdiction"
                },
                "description": {
                    "type": "string",
                    "expression": "description"
                },
                "derived-from": {
                    "type": "reference",
                    "expression": "relatedArtifact.resource"
                },
                "context-type": {
                    "type": "token",
                    "expression": "useContext.code"
                },
                "predecessor": {
                    "type": "reference",
                    "expression": "relatedArtifact.resource"
                },
                "title": {
                    "type": "string",
                    "expression": "title"
                },
                "composed-of": {
                    "type": "reference",
                    "expression": "relatedArtifact.resource"
                },
                "version": {
                    "type": "token",
                    "expression": "version"
                },
                "url": {
                    "type": "uri",
                    "expression": "url"
                },
                "context-quantity": {
                    "type": "quantity",
                    "expression": "useContext.valueQuantity"
                },
                "effective": {
                    "type": "date",
                    "expression": "effectivePeriod"
                },
                "depends-on": {
                    "type": "reference",
                    "expression": "relatedArtifact.resource"
                },
                "name": {
                    "type": "string",
                    "expression": "name"
                },
                "context": {
                    "type": "token",
                    "expression": "useContext.valueCodeableConcept"
                },
                "publisher": {
                    "type": "string",
                    "expression": "publisher"
                },
                "topic": {
                    "type": "token",
                    "expression": "topic"
                },
                "context-type-quantity": {
                    "type": "composite",
                    "expression": "useContext"
                },
                "status": {
                    "type": "token",
                    "expression": "status"
                }
            },
            "Evidence": {
                "date": {
                    "type": "date",
                    "expression": "date"
                },
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "successor": {
                    "type": "reference",
                    "expression": "relatedArtifact.resource"
                },
                "context-type-value": {
                    "type": "composite",
                    "expression": "useContext"
                },
                "jurisdiction": {
                    "type": "token",
                    "expression": "jurisdiction"
                },
                "description": {
                    "type": "string",
                    "expression": "description"
                },
                "derived-from": {
                    "type": "reference",
                    "expression": "relatedArtifact.resource"
                },
                "context-type": {
                    "type": "token",
                    "expression": "useContext.code"
                },
                "predecessor": {
                    "type": "reference",
                    "expression": "relatedArtifact.resource"
                },
                "title": {
                    "type": "string",
                    "expression": "title"
                },
                "composed-of": {
                    "type": "reference",
                    "expression": "relatedArtifact.resource"
                },
                "version": {
                    "type": "token",
                    "expression": "version"
                },
                "url": {
                    "type": "uri",
                    "expression": "url"
                },
                "context-quantity": {
                    "type": "quantity",
                    "expression": "useContext.valueQuantity"
                },
                "effective": {
                    "type": "date",
                    "expression": "effectivePeriod"
                },
                "depends-on": {
                    "type": "reference",
                    "expression": "relatedArtifact.resource"
                },
                "name": {
                    "type": "string",
                    "expression": "name"
                },
                "context": {
                    "type": "token",
                    "expression": "useContext.valueCodeableConcept"
                },
                "publisher": {
                    "type": "string",
                    "expression": "publisher"
                },
                "topic": {
                    "type": "token",
                    "expression": "topic"
                },
                "context-type-quantity": {
                    "type": "composite",
                    "expression": "useContext"
                },
                "status": {
                    "type": "token",
                    "expression": "status"
                }
            },
            "EvidenceVariable": {
                "date": {
                    "type": "date",
                    "expression": "date"
                },
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "successor": {
                    "type": "reference",
                    "expression": "relatedArtifact.resource"
                },
                "context-type-value": {
                    "type": "composite",
                    "expression": "useContext"
                },
                "jurisdiction": {
                    "type": "token",
                    "expression": "jurisdiction"
                },
                "description": {
                    "type": "string",
                    "expression": "description"
                },
                "derived-from": {
                    "type": "reference",
                    "expression": "relatedArtifact.resource"
                },
                "context-type": {
                    "type": "token",
                    "expression": "useContext.code"
                },
                "predecessor": {
                    "type": "reference",
                    "expression": "relatedArtifact.resource"
                },
                "title": {
                    "type": "string",
                    "expression": "title"
                },
                "composed-of": {
                    "type": "reference",
                    "expression": "relatedArtifact.resource"
                },
                "version": {
                    "type": "token",
                    "expression": "version"
                },
                "url": {
                    "type": "uri",
                    "expression": "url"
                },
                "context-quantity": {
                    "type": "quantity",
                    "expression": "useContext.valueQuantity"
                },
                "effective": {
                    "type": "date",
                    "expression": "effectivePeriod"
                },
                "depends-on": {
                    "type": "reference",
                    "expression": "relatedArtifact.resource"
                },
                "name": {
                    "type": "string",
                    "expression": "name"
                },
                "context": {
                    "type": "token",
                    "expression": "useContext.valueCodeableConcept"
                },
                "publisher": {
                    "type": "string",
                    "expression": "publisher"
                },
                "topic": {
                    "type": "token",
                    "expression": "topic"
                },
                "context-type-quantity": {
                    "type": "composite",
                    "expression": "useContext"
                },
                "status": {
                    "type": "token",
                    "expression": "status"
                }
            },
            "ExampleScenario": {
                "date": {
                    "type": "date",
                    "expression": "date"
                },
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "context-type-value": {
                    "type": "composite",
                    "expression": "useContext"
                },
                "jurisdiction": {
                    "type": "token",
                    "expression": "jurisdiction"
                },
                "context-type": {
                    "type": "token",
                    "expression": "useContext.code"
                },
                "version": {
                    "type": "token",
                    "expression": "version"
                },
                "url": {
                    "type": "uri",
                    "expression": "url"
                },
                "context-quantity": {
                    "type": "quantity",
                    "expression": "useContext.valueQuantity"
                },
                "name": {
                    "type": "string",
                    "expression": "name"
                },
                "context": {
                    "type": "token",
                    "expression": "useContext.valueCodeableConcept"
                },
                "publisher": {
                    "type": "string",
                    "expression": "publisher"
                },
                "context-type-quantity": {
                    "type": "composite",
                    "expression": "useContext"
                },
                "status": {
                    "type": "token",
                    "expression": "status"
                }
            },
            "ExplanationOfBenefit": {
                "coverage": {
                    "type": "reference",
                    "expression": "insurance.coverage"
                },
                "care-team": {
                    "type": "reference",
                    "expression": "careTeam.provider"
                },
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "created": {
                    "type": "date",
                    "expression": "created"
                },
                "encounter": {
                    "type": "reference",
                    "expression": "item.encounter"
                },
                "payee": {
                    "type": "reference",
                    "expression": "payee.party"
                },
                "disposition": {
                    "type": "string",
                    "expression": "disposition"
                },
                "provider": {
                    "type": "reference",
                    "expression": "provider"
                },
                "patient": {
                    "type": "reference",
                    "expression": "patient"
                },
                "detail-udi": {
                    "type": "reference",
                    "expression": "item.detail.udi"
                },
                "claim": {
                    "type": "reference",
                    "expression": "claim"
                },
                "enterer": {
                    "type": "reference",
                    "expression": "enterer"
                },
                "procedure-udi": {
                    "type": "reference",
                    "expression": "procedure.udi"
                },
                "subdetail-udi": {
                    "type": "reference",
                    "expression": "item.detail.subDetail.udi"
                },
                "facility": {
                    "type": "reference",
                    "expression": "facility"
                },
                "item-udi": {
                    "type": "reference",
                    "expression": "item.udi"
                },
                "status": {
                    "type": "token",
                    "expression": "status"
                }
            },
            "FamilyMemberHistory": {
                "date": {
                    "type": "date",
                    "expression": "date"
                },
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "code": {
                    "type": "token",
                    "expression": "condition.code"
                },
                "patient": {
                    "type": "reference",
                    "expression": "patient"
                },
                "sex": {
                    "type": "token",
                    "expression": "sex"
                },
                "instantiates-canonical": {
                    "type": "reference",
                    "expression": "instantiatesCanonical"
                },
                "instantiates-uri": {
                    "type": "uri",
                    "expression": "instantiatesUri"
                },
                "relationship": {
                    "type": "token",
                    "expression": "relationship"
                },
                "status": {
                    "type": "token",
                    "expression": "status"
                }
            },
            "Flag": {
                "date": {
                    "type": "date",
                    "expression": "period"
                },
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "subject": {
                    "type": "reference",
                    "expression": "subject"
                },
                "patient": {
                    "type": "reference",
                    "expression": "subject"
                },
                "author": {
                    "type": "reference",
                    "expression": "author"
                },
                "encounter": {
                    "type": "reference",
                    "expression": "encounter"
                }
            },
            "Goal": {
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "lifecycle-status": {
                    "type": "token",
                    "expression": "lifecycleStatus"
                },
                "achievement-status": {
                    "type": "token",
                    "expression": "achievementStatus"
                },
                "patient": {
                    "type": "reference",
                    "expression": "subject"
                },
                "subject": {
                    "type": "reference",
                    "expression": "subject"
                },
                "start-date": {
                    "type": "date",
                    "expression": "startDate"
                },
                "category": {
                    "type": "token",
                    "expression": "category"
                },
                "target-date": {
                    "type": "date",
                    "expression": "target.dueDate"
                }
            },
            "GraphDefinition": {
                "date": {
                    "type": "date",
                    "expression": "date"
                },
                "context-type-value": {
                    "type": "composite",
                    "expression": "useContext"
                },
                "jurisdiction": {
                    "type": "token",
                    "expression": "jurisdiction"
                },
                "start": {
                    "type": "token",
                    "expression": "start"
                },
                "description": {
                    "type": "string",
                    "expression": "description"
                },
                "context-type": {
                    "type": "token",
                    "expression": "useContext.code"
                },
                "version": {
                    "type": "token",
                    "expression": "version"
                },
                "url": {
                    "type": "uri",
                    "expression": "url"
                },
                "context-quantity": {
                    "type": "quantity",
                    "expression": "useContext.valueQuantity"
                },
                "name": {
                    "type": "string",
                    "expression": "name"
                },
                "context": {
                    "type": "token",
                    "expression": "useContext.valueCodeableConcept"
                },
                "publisher": {
                    "type": "string",
                    "expression": "publisher"
                },
                "context-type-quantity": {
                    "type": "composite",
                    "expression": "useContext"
                },
                "status": {
                    "type": "token",
                    "expression": "status"
                }
            },
            "Group": {
                "actual": {
                    "type": "token",
                    "expression": "actual"
                },
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "characteristic-value": {
                    "type": "composite",
                    "expression": "characteristic"
                },
                "managing-entity": {
                    "type": "reference",
                    "expression": "managingEntity"
                },
                "code": {
                    "type": "token",
                    "expression": "code"
                },
                "member": {
                    "type": "reference",
                    "expression": "member.entity"
                },
                "exclude": {
                    "type": "token",
                    "expression": "characteristic.exclude"
                },
                "type": {
                    "type": "token",
                    "expression": "type"
                },
                "value": {
                    "type": "token",
                    "expression": "characteristic.valueCodeableConcept"
                },
                "characteristic": {
                    "type": "token",
                    "expression": "characteristic.code"
                }
            },
            "GuidanceResponse": {
                "request": {
                    "type": "token",
                    "expression": "requestIdentifier"
                },
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "patient": {
                    "type": "reference",
                    "expression": "subject"
                },
                "subject": {
                    "type": "reference",
                    "expression": "subject"
                }
            },
            "HealthcareService": {
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "specialty": {
                    "type": "token",
                    "expression": "specialty"
                },
                "endpoint": {
                    "type": "reference",
                    "expression": "endpoint"
                },
                "service-category": {
                    "type": "token",
                    "expression": "category"
                },
                "coverage-area": {
                    "type": "reference",
                    "expression": "coverageArea"
                },
                "service-type": {
                    "type": "token",
                    "expression": "type"
                },
                "organization": {
                    "type": "reference",
                    "expression": "providedBy"
                },
                "name": {
                    "type": "string",
                    "expression": "name"
                },
                "active": {
                    "type": "token",
                    "expression": "active"
                },
                "location": {
                    "type": "reference",
                    "expression": "location"
                },
                "program": {
                    "type": "token",
                    "expression": "program"
                },
                "characteristic": {
                    "type": "token",
                    "expression": "characteristic"
                }
            },
            "ImagingStudy": {
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "reason": {
                    "type": "token",
                    "expression": "reasonCode"
                },
                "dicom-class": {
                    "type": "token",
                    "expression": "series.instance.sopClass"
                },
                "modality": {
                    "type": "token",
                    "expression": "series.modality"
                },
                "bodysite": {
                    "type": "token",
                    "expression": "series.bodySite"
                },
                "instance": {
                    "type": "token",
                    "expression": "series.instance.uid"
                },
                "performer": {
                    "type": "reference",
                    "expression": "series.performer.actor"
                },
                "subject": {
                    "type": "reference",
                    "expression": "subject"
                },
                "started": {
                    "type": "date",
                    "expression": "started"
                },
                "interpreter": {
                    "type": "reference",
                    "expression": "interpreter"
                },
                "encounter": {
                    "type": "reference",
                    "expression": "encounter"
                },
                "referrer": {
                    "type": "reference",
                    "expression": "referrer"
                },
                "endpoint": {
                    "type": "reference",
                    "expression": "endpoint"
                },
                "patient": {
                    "type": "reference",
                    "expression": "subject"
                },
                "series": {
                    "type": "token",
                    "expression": "series.uid"
                },
                "basedon": {
                    "type": "reference",
                    "expression": "basedOn"
                },
                "status": {
                    "type": "token",
                    "expression": "status"
                }
            },
            "Immunization": {
                "date": {
                    "type": "date",
                    "expression": "occurrenceDateTime"
                },
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "performer": {
                    "type": "reference",
                    "expression": "performer.actor"
                },
                "reaction": {
                    "type": "reference",
                    "expression": "reaction.detail"
                },
                "lot-number": {
                    "type": "string",
                    "expression": "lotNumber"
                },
                "status-reason": {
                    "type": "token",
                    "expression": "statusReason"
                },
                "reason-code": {
                    "type": "token",
                    "expression": "reasonCode"
                },
                "manufacturer": {
                    "type": "reference",
                    "expression": "manufacturer"
                },
                "target-disease": {
                    "type": "token",
                    "expression": "protocolApplied.targetDisease"
                },
                "patient": {
                    "type": "reference",
                    "expression": "patient"
                },
                "series": {
                    "type": "string",
                    "expression": "protocolApplied.series"
                },
                "vaccine-code": {
                    "type": "token",
                    "expression": "vaccineCode"
                },
                "reason-reference": {
                    "type": "reference",
                    "expression": "reasonReference"
                },
                "location": {
                    "type": "reference",
                    "expression": "location"
                },
                "status": {
                    "type": "token",
                    "expression": "status"
                },
                "reaction-date": {
                    "type": "date",
                    "expression": "reaction.date"
                }
            },
            "ImmunizationEvaluation": {
                "date": {
                    "type": "date",
                    "expression": "date"
                },
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "target-disease": {
                    "type": "token",
                    "expression": "targetDisease"
                },
                "patient": {
                    "type": "reference",
                    "expression": "patient"
                },
                "dose-status": {
                    "type": "token",
                    "expression": "doseStatus"
                },
                "immunization-event": {
                    "type": "reference",
                    "expression": "immunizationEvent"
                },
                "status": {
                    "type": "token",
                    "expression": "status"
                }
            },
            "ImmunizationRecommendation": {
                "date": {
                    "type": "date",
                    "expression": "date"
                },
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "target-disease": {
                    "type": "token",
                    "expression": "recommendation.targetDisease"
                },
                "patient": {
                    "type": "reference",
                    "expression": "patient"
                },
                "vaccine-type": {
                    "type": "token",
                    "expression": "recommendation.vaccineCode"
                },
                "information": {
                    "type": "reference",
                    "expression": "recommendation.supportingPatientInformation"
                },
                "support": {
                    "type": "reference",
                    "expression": "recommendation.supportingImmunization"
                },
                "status": {
                    "type": "token",
                    "expression": "recommendation.forecastStatus"
                }
            },
            "ImplementationGuide": {
                "date": {
                    "type": "date",
                    "expression": "date"
                },
                "context-type-value": {
                    "type": "composite",
                    "expression": "useContext"
                },
                "resource": {
                    "type": "reference",
                    "expression": "definition.resource.reference"
                },
                "jurisdiction": {
                    "type": "token",
                    "expression": "jurisdiction"
                },
                "description": {
                    "type": "string",
                    "expression": "description"
                },
                "context-type": {
                    "type": "token",
                    "expression": "useContext.code"
                },
                "experimental": {
                    "type": "token",
                    "expression": "experimental"
                },
                "global": {
                    "type": "reference",
                    "expression": "global.profile"
                },
                "title": {
                    "type": "string",
                    "expression": "title"
                },
                "version": {
                    "type": "token",
                    "expression": "version"
                },
                "url": {
                    "type": "uri",
                    "expression": "url"
                },
                "context-quantity": {
                    "type": "quantity",
                    "expression": "useContext.valueQuantity"
                },
                "depends-on": {
                    "type": "reference",
                    "expression": "dependsOn.uri"
                },
                "name": {
                    "type": "string",
                    "expression": "name"
                },
                "context": {
                    "type": "token",
                    "expression": "useContext.valueCodeableConcept"
                },
                "publisher": {
                    "type": "string",
                    "expression": "publisher"
                },
                "context-type-quantity": {
                    "type": "composite",
                    "expression": "useContext"
                },
                "status": {
                    "type": "token",
                    "expression": "status"
                }
            },
            "InsurancePlan": {
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "address": {
                    "type": "string",
                    "expression": "contact.address"
                },
                "address-state": {
                    "type": "string",
                    "expression": "contact.address.state"
                },
                "owned-by": {
                    "type": "reference",
                    "expression": "ownedBy"
                },
                "type": {
                    "type": "token",
                    "expression": "type"
                },
                "address-postalcode": {
                    "type": "string",
                    "expression": "contact.address.postalCode"
                },
                "administered-by": {
                    "type": "reference",
                    "expression": "administeredBy"
                },
                "address-country": {
                    "type": "string",
                    "expression": "contact.address.country"
                },
                "endpoint": {
                    "type": "reference",
                    "expression": "endpoint"
                },
                "phonetic": {
                    "type": "string",
                    "expression": "name"
                },
                "name": {
                    "type": "string",
                    "expression": "name"
                },
                "address-use": {
                    "type": "token",
                    "expression": "contact.address.use"
                },
                "address-city": {
                    "type": "string",
                    "expression": "contact.address.city"
                },
                "status": {
                    "type": "token",
                    "expression": "status"
                }
            },
            "Invoice": {
                "date": {
                    "type": "date",
                    "expression": "date"
                },
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "totalgross": {
                    "type": "quantity",
                    "expression": "totalGross"
                },
                "subject": {
                    "type": "reference",
                    "expression": "subject"
                },
                "participant-role": {
                    "type": "token",
                    "expression": "participant.role"
                },
                "type": {
                    "type": "token",
                    "expression": "type"
                },
                "issuer": {
                    "type": "reference",
                    "expression": "issuer"
                },
                "participant": {
                    "type": "reference",
                    "expression": "participant.actor"
                },
                "totalnet": {
                    "type": "quantity",
                    "expression": "totalNet"
                },
                "patient": {
                    "type": "reference",
                    "expression": "subject"
                },
                "recipient": {
                    "type": "reference",
                    "expression": "recipient"
                },
                "account": {
                    "type": "reference",
                    "expression": "account"
                },
                "status": {
                    "type": "token",
                    "expression": "status"
                }
            },
            "Library": {
                "date": {
                    "type": "date",
                    "expression": "date"
                },
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "successor": {
                    "type": "reference",
                    "expression": "relatedArtifact.resource"
                },
                "context-type-value": {
                    "type": "composite",
                    "expression": "useContext"
                },
                "jurisdiction": {
                    "type": "token",
                    "expression": "jurisdiction"
                },
                "description": {
                    "type": "string",
                    "expression": "description"
                },
                "derived-from": {
                    "type": "reference",
                    "expression": "relatedArtifact.resource"
                },
                "context-type": {
                    "type": "token",
                    "expression": "useContext.code"
                },
                "predecessor": {
                    "type": "reference",
                    "expression": "relatedArtifact.resource"
                },
                "title": {
                    "type": "string",
                    "expression": "title"
                },
                "composed-of": {
                    "type": "reference",
                    "expression": "relatedArtifact.resource"
                },
                "type": {
                    "type": "token",
                    "expression": "type"
                },
                "version": {
                    "type": "token",
                    "expression": "version"
                },
                "url": {
                    "type": "uri",
                    "expression": "url"
                },
                "context-quantity": {
                    "type": "quantity",
                    "expression": "useContext.valueQuantity"
                },
                "effective": {
                    "type": "date",
                    "expression": "effectivePeriod"
                },
                "depends-on": {
                    "type": "reference",
                    "expression": "relatedArtifact.resource"
                },
                "name": {
                    "type": "string",
                    "expression": "name"
                },
                "context": {
                    "type": "token",
                    "expression": "useContext.valueCodeableConcept"
                },
                "publisher": {
                    "type": "string",
                    "expression": "publisher"
                },
                "topic": {
                    "type": "token",
                    "expression": "topic"
                },
                "content-type": {
                    "type": "token",
                    "expression": "content.contentType"
                },
                "context-type-quantity": {
                    "type": "composite",
                    "expression": "useContext"
                },
                "status": {
                    "type": "token",
                    "expression": "status"
                }
            },
            "Linkage": {
                "item": {
                    "type": "reference",
                    "expression": "item.resource"
                },
                "author": {
                    "type": "reference",
                    "expression": "author"
                },
                "source": {
                    "type": "reference",
                    "expression": "item.resource"
                }
            },
            "List": {
                "date": {
                    "type": "date",
                    "expression": "date"
                },
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "item": {
                    "type": "reference",
                    "expression": "entry.item"
                },
                "empty-reason": {
                    "type": "token",
                    "expression": "emptyReason"
                },
                "code": {
                    "type": "token",
                    "expression": "code"
                },
                "notes": {
                    "type": "string",
                    "expression": "note.text"
                },
                "subject": {
                    "type": "reference",
                    "expression": "subject"
                },
                "patient": {
                    "type": "reference",
                    "expression": "subject"
                },
                "source": {
                    "type": "reference",
                    "expression": "source"
                },
                "encounter": {
                    "type": "reference",
                    "expression": "encounter"
                },
                "title": {
                    "type": "string",
                    "expression": "title"
                },
                "status": {
                    "type": "token",
                    "expression": "status"
                }
            },
            "Location": {
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "partof": {
                    "type": "reference",
                    "expression": "partOf"
                },
                "address": {
                    "type": "string",
                    "expression": "address"
                },
                "address-state": {
                    "type": "string",
                    "expression": "address.state"
                },
                "operational-status": {
                    "type": "token",
                    "expression": "operationalStatus"
                },
                "type": {
                    "type": "token",
                    "expression": "type"
                },
                "address-postalcode": {
                    "type": "string",
                    "expression": "address.postalCode"
                },
                "address-country": {
                    "type": "string",
                    "expression": "address.country"
                },
                "endpoint": {
                    "type": "reference",
                    "expression": "endpoint"
                },
                "organization": {
                    "type": "reference",
                    "expression": "managingOrganization"
                },
                "name": {
                    "type": "string",
                    "expression": "name"
                },
                "address-use": {
                    "type": "token",
                    "expression": "address.use"
                },
                "near": {
                    "type": "special",
                    "expression": "position"
                },
                "address-city": {
                    "type": "string",
                    "expression": "address.city"
                },
                "status": {
                    "type": "token",
                    "expression": "status"
                }
            },
            "Measure": {
                "date": {
                    "type": "date",
                    "expression": "date"
                },
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "successor": {
                    "type": "reference",
                    "expression": "relatedArtifact.resource"
                },
                "context-type-value": {
                    "type": "composite",
                    "expression": "useContext"
                },
                "jurisdiction": {
                    "type": "token",
                    "expression": "jurisdiction"
                },
                "description": {
                    "type": "string",
                    "expression": "description"
                },
                "derived-from": {
                    "type": "reference",
                    "expression": "relatedArtifact.resource"
                },
                "context-type": {
                    "type": "token",
                    "expression": "useContext.code"
                },
                "predecessor": {
                    "type": "reference",
                    "expression": "relatedArtifact.resource"
                },
                "title": {
                    "type": "string",
                    "expression": "title"
                },
                "composed-of": {
                    "type": "reference",
                    "expression": "relatedArtifact.resource"
                },
                "version": {
                    "type": "token",
                    "expression": "version"
                },
                "url": {
                    "type": "uri",
                    "expression": "url"
                },
                "context-quantity": {
                    "type": "quantity",
                    "expression": "useContext.valueQuantity"
                },
                "effective": {
                    "type": "date",
                    "expression": "effectivePeriod"
                },
                "depends-on": {
                    "type": "reference",
                    "expression": "relatedArtifact.resource"
                },
                "name": {
                    "type": "string",
                    "expression": "name"
                },
                "context": {
                    "type": "token",
                    "expression": "useContext.valueCodeableConcept"
                },
                "publisher": {
                    "type": "string",
                    "expression": "publisher"
                },
                "topic": {
                    "type": "token",
                    "expression": "topic"
                },
                "context-type-quantity": {
                    "type": "composite",
                    "expression": "useContext"
                },
                "status": {
                    "type": "token",
                    "expression": "status"
                }
            },
            "MeasureReport": {
                "date": {
                    "type": "date",
                    "expression": "date"
                },
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "period": {
                    "type": "date",
                    "expression": "period"
                },
                "measure": {
                    "type": "reference",
                    "expression": "measure"
                },
                "patient": {
                    "type": "reference",
                    "expression": "subject"
                },
                "subject": {
                    "type": "reference",
                    "expression": "subject"
                },
                "reporter": {
                    "type": "reference",
                    "expression": "reporter"
                },
                "status": {
                    "type": "token",
                    "expression": "status"
                },
                "evaluated-resource": {
                    "type": "reference",
                    "expression": "evaluatedResource"
                }
            },
            "Media": {
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "modality": {
                    "type": "token",
                    "expression": "modality"
                },
                "subject": {
                    "type": "reference",
                    "expression": "subject"
                },
                "created": {
                    "type": "date",
                    "expression": "createdDateTime"
                },
                "encounter": {
                    "type": "reference",
                    "expression": "encounter"
                },
                "type": {
                    "type": "token",
                    "expression": "type"
                },
                "operator": {
                    "type": "reference",
                    "expression": "operator"
                },
                "view": {
                    "type": "token",
                    "expression": "view"
                },
                "site": {
                    "type": "token",
                    "expression": "bodySite"
                },
                "based-on": {
                    "type": "reference",
                    "expression": "basedOn"
                },
                "patient": {
                    "type": "reference",
                    "expression": "subject"
                },
                "device": {
                    "type": "reference",
                    "expression": "device"
                },
                "status": {
                    "type": "token",
                    "expression": "status"
                }
            },
            "Medication": {
                "ingredient-code": {
                    "type": "token",
                    "expression": "ingredient.itemCodeableConcept"
                },
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "code": {
                    "type": "token",
                    "expression": "code"
                },
                "ingredient": {
                    "type": "reference",
                    "expression": "ingredient.itemReference"
                },
                "form": {
                    "type": "token",
                    "expression": "form"
                },
                "lot-number": {
                    "type": "token",
                    "expression": "batch.lotNumber"
                },
                "expiration-date": {
                    "type": "date",
                    "expression": "batch.expirationDate"
                },
                "manufacturer": {
                    "type": "reference",
                    "expression": "manufacturer"
                },
                "status": {
                    "type": "token",
                    "expression": "status"
                }
            },
            "MedicationAdministration": {
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "request": {
                    "type": "reference",
                    "expression": "request"
                },
                "code": {
                    "type": "token",
                    "expression": "medicationCodeableConcept"
                },
                "performer": {
                    "type": "reference",
                    "expression": "performer.actor"
                },
                "subject": {
                    "type": "reference",
                    "expression": "subject"
                },
                "medication": {
                    "type": "reference",
                    "expression": "medicationReference"
                },
                "reason-given": {
                    "type": "token",
                    "expression": "reasonCode"
                },
                "patient": {
                    "type": "reference",
                    "expression": "subject"
                },
                "effective-time": {
                    "type": "date",
                    "expression": "effectiveDateTime"
                },
                "context": {
                    "type": "reference",
                    "expression": "context"
                },
                "reason-not-given": {
                    "type": "token",
                    "expression": "statusReason"
                },
                "device": {
                    "type": "reference",
                    "expression": "device"
                },
                "status": {
                    "type": "token",
                    "expression": "status"
                }
            },
            "MedicationDispense": {
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "performer": {
                    "type": "reference",
                    "expression": "performer.actor"
                },
                "code": {
                    "type": "token",
                    "expression": "medicationCodeableConcept"
                },
                "receiver": {
                    "type": "reference",
                    "expression": "receiver"
                },
                "subject": {
                    "type": "reference",
                    "expression": "subject"
                },
                "destination": {
                    "type": "reference",
                    "expression": "destination"
                },
                "medication": {
                    "type": "reference",
                    "expression": "medicationReference"
                },
                "responsibleparty": {
                    "type": "reference",
                    "expression": "substitution.responsibleParty"
                },
                "type": {
                    "type": "token",
                    "expression": "type"
                },
                "whenhandedover": {
                    "type": "date",
                    "expression": "whenHandedOver"
                },
                "whenprepared": {
                    "type": "date",
                    "expression": "whenPrepared"
                },
                "prescription": {
                    "type": "reference",
                    "expression": "authorizingPrescription"
                },
                "patient": {
                    "type": "reference",
                    "expression": "subject"
                },
                "context": {
                    "type": "reference",
                    "expression": "context"
                },
                "status": {
                    "type": "token",
                    "expression": "status"
                }
            },
            "MedicationKnowledge": {
                "code": {
                    "type": "token",
                    "expression": "code"
                },
                "ingredient": {
                    "type": "reference",
                    "expression": "ingredient.itemReference"
                },
                "doseform": {
                    "type": "token",
                    "expression": "doseForm"
                },
                "classification-type": {
                    "type": "token",
                    "expression": "medicineClassification.type"
                },
                "monograph-type": {
                    "type": "token",
                    "expression": "monograph.type"
                },
                "classification": {
                    "type": "token",
                    "expression": "medicineClassification.classification"
                },
                "manufacturer": {
                    "type": "reference",
                    "expression": "manufacturer"
                },
                "ingredient-code": {
                    "type": "token",
                    "expression": "ingredient.itemCodeableConcept"
                },
                "source-cost": {
                    "type": "token",
                    "expression": "cost.source"
                },
                "monograph": {
                    "type": "reference",
                    "expression": "monograph.source"
                },
                "monitoring-program-name": {
                    "type": "token",
                    "expression": "monitoringProgram.name"
                },
                "monitoring-program-type": {
                    "type": "token",
                    "expression": "monitoringProgram.type"
                },
                "status": {
                    "type": "token",
                    "expression": "status"
                }
            },
            "MedicationRequest": {
                "requester": {
                    "type": "reference",
                    "expression": "requester"
                },
                "date": {
                    "type": "date",
                    "expression": "dosageInstruction.timing.event"
                },
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "intended-dispenser": {
                    "type": "reference",
                    "expression": "dispenseRequest.performer"
                },
                "authoredon": {
                    "type": "date",
                    "expression": "authoredOn"
                },
                "code": {
                    "type": "token",
                    "expression": "medicationCodeableConcept"
                },
                "subject": {
                    "type": "reference",
                    "expression": "subject"
                },
                "medication": {
                    "type": "reference",
                    "expression": "medicationReference"
                },
                "encounter": {
                    "type": "reference",
                    "expression": "encounter"
                },
                "priority": {
                    "type": "token",
                    "expression": "priority"
                },
                "intent": {
                    "type": "token",
                    "expression": "intent"
                },
                "patient": {
                    "type": "reference",
                    "expression": "subject"
                },
                "intended-performer": {
                    "type": "reference",
                    "expression": "performer"
                },
                "intended-performertype": {
                    "type": "token",
                    "expression": "performerType"
                },
                "category": {
                    "type": "token",
                    "expression": "category"
                },
                "status": {
                    "type": "token",
                    "expression": "status"
                }
            },
            "MedicationStatement": {
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "effective": {
                    "type": "date",
                    "expression": "effectiveDateTime"
                },
                "code": {
                    "type": "token",
                    "expression": "medicationCodeableConcept"
                },
                "subject": {
                    "type": "reference",
                    "expression": "subject"
                },
                "patient": {
                    "type": "reference",
                    "expression": "subject"
                },
                "context": {
                    "type": "reference",
                    "expression": "context"
                },
                "medication": {
                    "type": "reference",
                    "expression": "medicationReference"
                },
                "part-of": {
                    "type": "reference",
                    "expression": "partOf"
                },
                "source": {
                    "type": "reference",
                    "expression": "informationSource"
                },
                "category": {
                    "type": "token",
                    "expression": "category"
                },
                "status": {
                    "type": "token",
                    "expression": "status"
                }
            },
            "MedicinalProduct": {
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "name": {
                    "type": "string",
                    "expression": "name.productName"
                },
                "name-language": {
                    "type": "token",
                    "expression": "name.countryLanguage.language"
                }
            },
            "MedicinalProductAuthorization": {
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "country": {
                    "type": "token",
                    "expression": "country"
                },
                "subject": {
                    "type": "reference",
                    "expression": "subject"
                },
                "holder": {
                    "type": "reference",
                    "expression": "holder"
                },
                "status": {
                    "type": "token",
                    "expression": "status"
                }
            },
            "MedicinalProductContraindication": {
                "subject": {
                    "type": "reference",
                    "expression": "subject"
                }
            },
            "MedicinalProductIndication": {
                "subject": {
                    "type": "reference",
                    "expression": "subject"
                }
            },
            "MedicinalProductInteraction": {
                "subject": {
                    "type": "reference",
                    "expression": "subject"
                }
            },
            "MedicinalProductPackaged": {
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "subject": {
                    "type": "reference",
                    "expression": "subject"
                }
            },
            "MedicinalProductPharmaceutical": {
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "route": {
                    "type": "token",
                    "expression": "routeOfAdministration.code"
                },
                "target-species": {
                    "type": "token",
                    "expression": "routeOfAdministration.targetSpecies.code"
                }
            },
            "MedicinalProductUndesirableEffect": {
                "subject": {
                    "type": "reference",
                    "expression": "subject"
                }
            },
            "MessageDefinition": {
                "date": {
                    "type": "date",
                    "expression": "date"
                },
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "parent": {
                    "type": "reference",
                    "expression": "parent"
                },
                "context-type-value": {
                    "type": "composite",
                    "expression": "useContext"
                },
                "jurisdiction": {
                    "type": "token",
                    "expression": "jurisdiction"
                },
                "description": {
                    "type": "string",
                    "expression": "description"
                },
                "focus": {
                    "type": "token",
                    "expression": "focus.code"
                },
                "context-type": {
                    "type": "token",
                    "expression": "useContext.code"
                },
                "title": {
                    "type": "string",
                    "expression": "title"
                },
                "version": {
                    "type": "token",
                    "expression": "version"
                },
                "url": {
                    "type": "uri",
                    "expression": "url"
                },
                "context-quantity": {
                    "type": "quantity",
                    "expression": "useContext.valueQuantity"
                },
                "name": {
                    "type": "string",
                    "expression": "name"
                },
                "context": {
                    "type": "token",
                    "expression": "useContext.valueCodeableConcept"
                },
                "publisher": {
                    "type": "string",
                    "expression": "publisher"
                },
                "event": {
                    "type": "token",
                    "expression": "eventCoding"
                },
                "category": {
                    "type": "token",
                    "expression": "category"
                },
                "context-type-quantity": {
                    "type": "composite",
                    "expression": "useContext"
                },
                "status": {
                    "type": "token",
                    "expression": "status"
                }
            },
            "MessageHeader": {
                "code": {
                    "type": "token",
                    "expression": "response.code"
                },
                "receiver": {
                    "type": "reference",
                    "expression": "destination.receiver"
                },
                "author": {
                    "type": "reference",
                    "expression": "author"
                },
                "destination": {
                    "type": "string",
                    "expression": "destination.name"
                },
                "focus": {
                    "type": "reference",
                    "expression": "focus"
                },
                "source": {
                    "type": "string",
                    "expression": "source.name"
                },
                "target": {
                    "type": "reference",
                    "expression": "destination.target"
                },
                "destination-uri": {
                    "type": "uri",
                    "expression": "destination.endpoint"
                },
                "source-uri": {
                    "type": "uri",
                    "expression": "source.endpoint"
                },
                "sender": {
                    "type": "reference",
                    "expression": "sender"
                },
                "responsible": {
                    "type": "reference",
                    "expression": "responsible"
                },
                "enterer": {
                    "type": "reference",
                    "expression": "enterer"
                },
                "response-id": {
                    "type": "token",
                    "expression": "response.identifier"
                },
                "event": {
                    "type": "token",
                    "expression": "eventCoding"
                }
            },
            "MolecularSequence": {
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "referenceseqid-variant-coordinate": {
                    "type": "composite",
                    "expression": "variant"
                },
                "chromosome": {
                    "type": "token",
                    "expression": "referenceSeq.chromosome"
                },
                "window-end": {
                    "type": "number",
                    "expression": "referenceSeq.windowEnd"
                },
                "type": {
                    "type": "token",
                    "expression": "type"
                },
                "window-start": {
                    "type": "number",
                    "expression": "referenceSeq.windowStart"
                },
                "variant-end": {
                    "type": "number",
                    "expression": "variant.end"
                },
                "chromosome-variant-coordinate": {
                    "type": "composite",
                    "expression": "variant"
                },
                "patient": {
                    "type": "reference",
                    "expression": "patient"
                },
                "variant-start": {
                    "type": "number",
                    "expression": "variant.start"
                },
                "chromosome-window-coordinate": {
                    "type": "composite",
                    "expression": "referenceSeq"
                },
                "referenceseqid-window-coordinate": {
                    "type": "composite",
                    "expression": "referenceSeq"
                },
                "referenceseqid": {
                    "type": "token",
                    "expression": "referenceSeq.referenceSeqId"
                }
            },
            "NamingSystem": {
                "date": {
                    "type": "date",
                    "expression": "date"
                },
                "period": {
                    "type": "date",
                    "expression": "uniqueId.period"
                },
                "context-type-value": {
                    "type": "composite",
                    "expression": "useContext"
                },
                "kind": {
                    "type": "token",
                    "expression": "kind"
                },
                "jurisdiction": {
                    "type": "token",
                    "expression": "jurisdiction"
                },
                "description": {
                    "type": "string",
                    "expression": "description"
                },
                "context-type": {
                    "type": "token",
                    "expression": "useContext.code"
                },
                "type": {
                    "type": "token",
                    "expression": "type"
                },
                "id-type": {
                    "type": "token",
                    "expression": "uniqueId.type"
                },
                "context-quantity": {
                    "type": "quantity",
                    "expression": "useContext.valueQuantity"
                },
                "responsible": {
                    "type": "string",
                    "expression": "responsible"
                },
                "contact": {
                    "type": "string",
                    "expression": "contact.name"
                },
                "name": {
                    "type": "string",
                    "expression": "name"
                },
                "context": {
                    "type": "token",
                    "expression": "useContext.valueCodeableConcept"
                },
                "publisher": {
                    "type": "string",
                    "expression": "publisher"
                },
                "telecom": {
                    "type": "token",
                    "expression": "contact.telecom"
                },
                "value": {
                    "type": "string",
                    "expression": "uniqueId.value"
                },
                "context-type-quantity": {
                    "type": "composite",
                    "expression": "useContext"
                },
                "status": {
                    "type": "token",
                    "expression": "status"
                }
            },
            "NutritionOrder": {
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "datetime": {
                    "type": "date",
                    "expression": "dateTime"
                },
                "provider": {
                    "type": "reference",
                    "expression": "orderer"
                },
                "patient": {
                    "type": "reference",
                    "expression": "patient"
                },
                "supplement": {
                    "type": "token",
                    "expression": "supplement.type"
                },
                "formula": {
                    "type": "token",
                    "expression": "enteralFormula.baseFormulaType"
                },
                "instantiates-canonical": {
                    "type": "reference",
                    "expression": "instantiatesCanonical"
                },
                "instantiates-uri": {
                    "type": "uri",
                    "expression": "instantiatesUri"
                },
                "encounter": {
                    "type": "reference",
                    "expression": "encounter"
                },
                "oraldiet": {
                    "type": "token",
                    "expression": "oralDiet.type"
                },
                "status": {
                    "type": "token",
                    "expression": "status"
                },
                "additive": {
                    "type": "token",
                    "expression": "enteralFormula.additiveType"
                }
            },
            "Observation": {
                "date": {
                    "type": "date",
                    "expression": "effectiveDateTime"
                },
                "combo-data-absent-reason": {
                    "type": "token",
                    "expression": "dataAbsentReason"
                },
                "code": {
                    "type": "token",
                    "expression": "code"
                },
                "combo-code-value-quantity": {
                    "type": "composite",
                    "expression": "Observation"
                },
                "subject": {
                    "type": "reference",
                    "expression": "subject"
                },
                "component-data-absent-reason": {
                    "type": "token",
                    "expression": "component.dataAbsentReason"
                },
                "value-concept": {
                    "type": "token",
                    "expression": "valueCodeableConcept"
                },
                "value-date": {
                    "type": "date",
                    "expression": "valueDateTime"
                },
                "focus": {
                    "type": "reference",
                    "expression": "focus"
                },
                "derived-from": {
                    "type": "reference",
                    "expression": "derivedFrom"
                },
                "part-of": {
                    "type": "reference",
                    "expression": "partOf"
                },
                "has-member": {
                    "type": "reference",
                    "expression": "hasMember"
                },
                "code-value-string": {
                    "type": "composite",
                    "expression": "Observation"
                },
                "component-code-value-quantity": {
                    "type": "composite",
                    "expression": "component"
                },
                "based-on": {
                    "type": "reference",
                    "expression": "basedOn"
                },
                "code-value-date": {
                    "type": "composite",
                    "expression": "Observation"
                },
                "patient": {
                    "type": "reference",
                    "expression": "subject"
                },
                "specimen": {
                    "type": "reference",
                    "expression": "specimen"
                },
                "component-code": {
                    "type": "token",
                    "expression": "component.code"
                },
                "code-value-quantity": {
                    "type": "composite",
                    "expression": "Observation"
                },
                "combo-code-value-concept": {
                    "type": "composite",
                    "expression": "Observation"
                },
                "value-string": {
                    "type": "string",
                    "expression": "valueQuantity"
                },
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "performer": {
                    "type": "reference",
                    "expression": "performer"
                },
                "combo-code": {
                    "type": "token",
                    "expression": "code"
                },
                "method": {
                    "type": "token",
                    "expression": "method"
                },
                "value-quantity": {
                    "type": "quantity",
                    "expression": "valueQuantity"
                },
                "component-value-quantity": {
                    "type": "quantity",
                    "expression": "component.valueQuantity"
                },
                "data-absent-reason": {
                    "type": "token",
                    "expression": "dataAbsentReason"
                },
                "combo-value-quantity": {
                    "type": "quantity",
                    "expression": "valueQuantity"
                },
                "encounter": {
                    "type": "reference",
                    "expression": "encounter"
                },
                "code-value-concept": {
                    "type": "composite",
                    "expression": "Observation"
                },
                "component-code-value-concept": {
                    "type": "composite",
                    "expression": "component"
                },
                "component-value-concept": {
                    "type": "token",
                    "expression": "component.valueCodeableConcept"
                },
                "category": {
                    "type": "token",
                    "expression": "category"
                },
                "device": {
                    "type": "reference",
                    "expression": "device"
                },
                "combo-value-concept": {
                    "type": "token",
                    "expression": "valueCodeableConcept"
                },
                "status": {
                    "type": "token",
                    "expression": "status"
                }
            },
            "OperationDefinition": {
                "date": {
                    "type": "date",
                    "expression": "date"
                },
                "code": {
                    "type": "token",
                    "expression": "code"
                },
                "instance": {
                    "type": "token",
                    "expression": "instance"
                },
                "context-type-value": {
                    "type": "composite",
                    "expression": "useContext"
                },
                "kind": {
                    "type": "token",
                    "expression": "kind"
                },
                "jurisdiction": {
                    "type": "token",
                    "expression": "jurisdiction"
                },
                "description": {
                    "type": "string",
                    "expression": "description"
                },
                "context-type": {
                    "type": "token",
                    "expression": "useContext.code"
                },
                "title": {
                    "type": "string",
                    "expression": "title"
                },
                "type": {
                    "type": "token",
                    "expression": "type"
                },
                "version": {
                    "type": "token",
                    "expression": "version"
                },
                "url": {
                    "type": "uri",
                    "expression": "url"
                },
                "context-quantity": {
                    "type": "quantity",
                    "expression": "useContext.valueQuantity"
                },
                "input-profile": {
                    "type": "reference",
                    "expression": "inputProfile"
                },
                "output-profile": {
                    "type": "reference",
                    "expression": "outputProfile"
                },
                "system": {
                    "type": "token",
                    "expression": "system"
                },
                "name": {
                    "type": "string",
                    "expression": "name"
                },
                "context": {
                    "type": "token",
                    "expression": "useContext.valueCodeableConcept"
                },
                "publisher": {
                    "type": "string",
                    "expression": "publisher"
                },
                "context-type-quantity": {
                    "type": "composite",
                    "expression": "useContext"
                },
                "status": {
                    "type": "token",
                    "expression": "status"
                },
                "base": {
                    "type": "reference",
                    "expression": "base"
                }
            },
            "Organization": {
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "partof": {
                    "type": "reference",
                    "expression": "partOf"
                },
                "address": {
                    "type": "string",
                    "expression": "address"
                },
                "address-state": {
                    "type": "string",
                    "expression": "address.state"
                },
                "active": {
                    "type": "token",
                    "expression": "active"
                },
                "type": {
                    "type": "token",
                    "expression": "type"
                },
                "address-postalcode": {
                    "type": "string",
                    "expression": "address.postalCode"
                },
                "address-country": {
                    "type": "string",
                    "expression": "address.country"
                },
                "endpoint": {
                    "type": "reference",
                    "expression": "endpoint"
                },
                "phonetic": {
                    "type": "string",
                    "expression": "name"
                },
                "name": {
                    "type": "string",
                    "expression": "name"
                },
                "address-use": {
                    "type": "token",
                    "expression": "address.use"
                },
                "address-city": {
                    "type": "string",
                    "expression": "address.city"
                }
            },
            "OrganizationAffiliation": {
                "date": {
                    "type": "date",
                    "expression": "period"
                },
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "specialty": {
                    "type": "token",
                    "expression": "specialty"
                },
                "role": {
                    "type": "token",
                    "expression": "code"
                },
                "active": {
                    "type": "token",
                    "expression": "active"
                },
                "primary-organization": {
                    "type": "reference",
                    "expression": "organization"
                },
                "network": {
                    "type": "reference",
                    "expression": "network"
                },
                "endpoint": {
                    "type": "reference",
                    "expression": "endpoint"
                },
                "phone": {
                    "type": "token",
                    "expression": "telecom"
                },
                "service": {
                    "type": "reference",
                    "expression": "healthcareService"
                },
                "participating-organization": {
                    "type": "reference",
                    "expression": "participatingOrganization"
                },
                "telecom": {
                    "type": "token",
                    "expression": "telecom"
                },
                "location": {
                    "type": "reference",
                    "expression": "location"
                },
                "email": {
                    "type": "token",
                    "expression": "telecom"
                }
            },
            "Patient": {
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "given": {
                    "type": "string",
                    "expression": "name.given"
                },
                "address": {
                    "type": "string",
                    "expression": "address"
                },
                "birthdate": {
                    "type": "date",
                    "expression": "birthDate"
                },
                "deceased": {
                    "type": "token",
                    "expression": "deceasedBoolean"
                },
                "address-state": {
                    "type": "string",
                    "expression": "address.state"
                },
                "gender": {
                    "type": "token",
                    "expression": "gender"
                },
                "general-practitioner": {
                    "type": "reference",
                    "expression": "generalPractitioner"
                },
                "link": {
                    "type": "reference",
                    "expression": "link.other"
                },
                "active": {
                    "type": "token",
                    "expression": "active"
                },
                "language": {
                    "type": "token",
                    "expression": "communication.language"
                },
                "address-postalcode": {
                    "type": "string",
                    "expression": "address.postalCode"
                },
                "address-country": {
                    "type": "string",
                    "expression": "address.country"
                },
                "death-date": {
                    "type": "date",
                    "expression": "deceasedDateTime"
                },
                "phonetic": {
                    "type": "string",
                    "expression": "name"
                },
                "phone": {
                    "type": "token",
                    "expression": "telecom"
                },
                "organization": {
                    "type": "reference",
                    "expression": "managingOrganization"
                },
                "name": {
                    "type": "string",
                    "expression": "name"
                },
                "address-use": {
                    "type": "token",
                    "expression": "address.use"
                },
                "telecom": {
                    "type": "token",
                    "expression": "telecom"
                },
                "family": {
                    "type": "string",
                    "expression": "name.family"
                },
                "address-city": {
                    "type": "string",
                    "expression": "address.city"
                },
                "email": {
                    "type": "token",
                    "expression": "telecom"
                }
            },
            "PaymentNotice": {
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "request": {
                    "type": "reference",
                    "expression": "request"
                },
                "provider": {
                    "type": "reference",
                    "expression": "provider"
                },
                "created": {
                    "type": "date",
                    "expression": "created"
                },
                "response": {
                    "type": "reference",
                    "expression": "response"
                },
                "payment-status": {
                    "type": "token",
                    "expression": "paymentStatus"
                },
                "status": {
                    "type": "token",
                    "expression": "status"
                }
            },
            "PaymentReconciliation": {
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "request": {
                    "type": "reference",
                    "expression": "request"
                },
                "disposition": {
                    "type": "string",
                    "expression": "disposition"
                },
                "created": {
                    "type": "date",
                    "expression": "created"
                },
                "payment-issuer": {
                    "type": "reference",
                    "expression": "paymentIssuer"
                },
                "outcome": {
                    "type": "token",
                    "expression": "outcome"
                },
                "requestor": {
                    "type": "reference",
                    "expression": "requestor"
                },
                "status": {
                    "type": "token",
                    "expression": "status"
                }
            },
            "Person": {
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "address": {
                    "type": "string",
                    "expression": "address"
                },
                "birthdate": {
                    "type": "date",
                    "expression": "birthDate"
                },
                "address-state": {
                    "type": "string",
                    "expression": "address.state"
                },
                "gender": {
                    "type": "token",
                    "expression": "gender"
                },
                "practitioner": {
                    "type": "reference",
                    "expression": "link.target"
                },
                "link": {
                    "type": "reference",
                    "expression": "link.target"
                },
                "relatedperson": {
                    "type": "reference",
                    "expression": "link.target"
                },
                "address-postalcode": {
                    "type": "string",
                    "expression": "address.postalCode"
                },
                "address-country": {
                    "type": "string",
                    "expression": "address.country"
                },
                "phonetic": {
                    "type": "string",
                    "expression": "name"
                },
                "phone": {
                    "type": "token",
                    "expression": "telecom"
                },
                "patient": {
                    "type": "reference",
                    "expression": "link.target"
                },
                "organization": {
                    "type": "reference",
                    "expression": "managingOrganization"
                },
                "name": {
                    "type": "string",
                    "expression": "name"
                },
                "address-use": {
                    "type": "token",
                    "expression": "address.use"
                },
                "telecom": {
                    "type": "token",
                    "expression": "telecom"
                },
                "address-city": {
                    "type": "string",
                    "expression": "address.city"
                },
                "email": {
                    "type": "token",
                    "expression": "telecom"
                }
            },
            "PlanDefinition": {
                "date": {
                    "type": "date",
                    "expression": "date"
                },
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "successor": {
                    "type": "reference",
                    "expression": "relatedArtifact.resource"
                },
                "context-type-value": {
                    "type": "composite",
                    "expression": "useContext"
                },
                "jurisdiction": {
                    "type": "token",
                    "expression": "jurisdiction"
                },
                "description": {
                    "type": "string",
                    "expression": "description"
                },
                "derived-from": {
                    "type": "reference",
                    "expression": "relatedArtifact.resource"
                },
                "context-type": {
                    "type": "token",
                    "expression": "useContext.code"
                },
                "predecessor": {
                    "type": "reference",
                    "expression": "relatedArtifact.resource"
                },
                "title": {
                    "type": "string",
                    "expression": "title"
                },
                "composed-of": {
                    "type": "reference",
                    "expression": "relatedArtifact.resource"
                },
                "type": {
                    "type": "token",
                    "expression": "type"
                },
                "version": {
                    "type": "token",
                    "expression": "version"
                },
                "url": {
                    "type": "uri",
                    "expression": "url"
                },
                "context-quantity": {
                    "type": "quantity",
                    "expression": "useContext.valueQuantity"
                },
                "effective": {
                    "type": "date",
                    "expression": "effectivePeriod"
                },
                "depends-on": {
                    "type": "reference",
                    "expression": "relatedArtifact.resource"
                },
                "name": {
                    "type": "string",
                    "expression": "name"
                },
                "context": {
                    "type": "token",
                    "expression": "useContext.valueCodeableConcept"
                },
                "publisher": {
                    "type": "string",
                    "expression": "publisher"
                },
                "topic": {
                    "type": "token",
                    "expression": "topic"
                },
                "definition": {
                    "type": "reference",
                    "expression": "action.definitionCanonical"
                },
                "context-type-quantity": {
                    "type": "composite",
                    "expression": "useContext"
                },
                "status": {
                    "type": "token",
                    "expression": "status"
                }
            },
            "Practitioner": {
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "given": {
                    "type": "string",
                    "expression": "name.given"
                },
                "address": {
                    "type": "string",
                    "expression": "address"
                },
                "address-state": {
                    "type": "string",
                    "expression": "address.state"
                },
                "gender": {
                    "type": "token",
                    "expression": "gender"
                },
                "active": {
                    "type": "token",
                    "expression": "active"
                },
                "address-postalcode": {
                    "type": "string",
                    "expression": "address.postalCode"
                },
                "address-country": {
                    "type": "string",
                    "expression": "address.country"
                },
                "phonetic": {
                    "type": "string",
                    "expression": "name"
                },
                "phone": {
                    "type": "token",
                    "expression": "telecom"
                },
                "name": {
                    "type": "string",
                    "expression": "name"
                },
                "address-use": {
                    "type": "token",
                    "expression": "address.use"
                },
                "telecom": {
                    "type": "token",
                    "expression": "telecom"
                },
                "family": {
                    "type": "string",
                    "expression": "name.family"
                },
                "address-city": {
                    "type": "string",
                    "expression": "address.city"
                },
                "communication": {
                    "type": "token",
                    "expression": "communication"
                },
                "email": {
                    "type": "token",
                    "expression": "telecom"
                }
            },
            "PractitionerRole": {
                "date": {
                    "type": "date",
                    "expression": "period"
                },
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "specialty": {
                    "type": "token",
                    "expression": "specialty"
                },
                "role": {
                    "type": "token",
                    "expression": "code"
                },
                "practitioner": {
                    "type": "reference",
                    "expression": "practitioner"
                },
                "active": {
                    "type": "token",
                    "expression": "active"
                },
                "endpoint": {
                    "type": "reference",
                    "expression": "endpoint"
                },
                "phone": {
                    "type": "token",
                    "expression": "telecom"
                },
                "service": {
                    "type": "reference",
                    "expression": "healthcareService"
                },
                "organization": {
                    "type": "reference",
                    "expression": "organization"
                },
                "telecom": {
                    "type": "token",
                    "expression": "telecom"
                },
                "location": {
                    "type": "reference",
                    "expression": "location"
                },
                "email": {
                    "type": "token",
                    "expression": "telecom"
                }
            },
            "Procedure": {
                "date": {
                    "type": "date",
                    "expression": "performedDateTime"
                },
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "code": {
                    "type": "token",
                    "expression": "code"
                },
                "performer": {
                    "type": "reference",
                    "expression": "performer.actor"
                },
                "subject": {
                    "type": "reference",
                    "expression": "subject"
                },
                "instantiates-canonical": {
                    "type": "reference",
                    "expression": "instantiatesCanonical"
                },
                "part-of": {
                    "type": "reference",
                    "expression": "partOf"
                },
                "encounter": {
                    "type": "reference",
                    "expression": "encounter"
                },
                "reason-code": {
                    "type": "token",
                    "expression": "reasonCode"
                },
                "based-on": {
                    "type": "reference",
                    "expression": "basedOn"
                },
                "patient": {
                    "type": "reference",
                    "expression": "subject"
                },
                "reason-reference": {
                    "type": "reference",
                    "expression": "reasonReference"
                },
                "location": {
                    "type": "reference",
                    "expression": "location"
                },
                "instantiates-uri": {
                    "type": "uri",
                    "expression": "instantiatesUri"
                },
                "category": {
                    "type": "token",
                    "expression": "category"
                },
                "status": {
                    "type": "token",
                    "expression": "status"
                }
            },
            "Provenance": {
                "agent-type": {
                    "type": "token",
                    "expression": "agent.type"
                },
                "agent": {
                    "type": "reference",
                    "expression": "agent.who"
                },
                "signature-type": {
                    "type": "token",
                    "expression": "signature.type"
                },
                "patient": {
                    "type": "reference",
                    "expression": "target"
                },
                "location": {
                    "type": "reference",
                    "expression": "location"
                },
                "recorded": {
                    "type": "date",
                    "expression": "recorded"
                },
                "agent-role": {
                    "type": "token",
                    "expression": "agent.role"
                },
                "when": {
                    "type": "date",
                    "expression": "occurredDateTime"
                },
                "entity": {
                    "type": "reference",
                    "expression": "entity.what"
                },
                "target": {
                    "type": "reference",
                    "expression": "target"
                }
            },
            "Questionnaire": {
                "date": {
                    "type": "date",
                    "expression": "date"
                },
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "code": {
                    "type": "token",
                    "expression": "item.code"
                },
                "context-type-value": {
                    "type": "composite",
                    "expression": "useContext"
                },
                "jurisdiction": {
                    "type": "token",
                    "expression": "jurisdiction"
                },
                "description": {
                    "type": "string",
                    "expression": "description"
                },
                "context-type": {
                    "type": "token",
                    "expression": "useContext.code"
                },
                "title": {
                    "type": "string",
                    "expression": "title"
                },
                "version": {
                    "type": "token",
                    "expression": "version"
                },
                "url": {
                    "type": "uri",
                    "expression": "url"
                },
                "context-quantity": {
                    "type": "quantity",
                    "expression": "useContext.valueQuantity"
                },
                "effective": {
                    "type": "date",
                    "expression": "effectivePeriod"
                },
                "subject-type": {
                    "type": "token",
                    "expression": "subjectType"
                },
                "name": {
                    "type": "string",
                    "expression": "name"
                },
                "context": {
                    "type": "token",
                    "expression": "useContext.valueCodeableConcept"
                },
                "publisher": {
                    "type": "string",
                    "expression": "publisher"
                },
                "definition": {
                    "type": "uri",
                    "expression": "item.definition"
                },
                "context-type-quantity": {
                    "type": "composite",
                    "expression": "useContext"
                },
                "status": {
                    "type": "token",
                    "expression": "status"
                }
            },
            "QuestionnaireResponse": {
                "authored": {
                    "type": "date",
                    "expression": "authored"
                },
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "questionnaire": {
                    "type": "reference",
                    "expression": "questionnaire"
                },
                "based-on": {
                    "type": "reference",
                    "expression": "basedOn"
                },
                "subject": {
                    "type": "reference",
                    "expression": "subject"
                },
                "author": {
                    "type": "reference",
                    "expression": "author"
                },
                "patient": {
                    "type": "reference",
                    "expression": "subject"
                },
                "part-of": {
                    "type": "reference",
                    "expression": "partOf"
                },
                "encounter": {
                    "type": "reference",
                    "expression": "encounter"
                },
                "source": {
                    "type": "reference",
                    "expression": "source"
                },
                "status": {
                    "type": "token",
                    "expression": "status"
                }
            },
            "RelatedPerson": {
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "address": {
                    "type": "string",
                    "expression": "address"
                },
                "birthdate": {
                    "type": "date",
                    "expression": "birthDate"
                },
                "address-state": {
                    "type": "string",
                    "expression": "address.state"
                },
                "gender": {
                    "type": "token",
                    "expression": "gender"
                },
                "active": {
                    "type": "token",
                    "expression": "active"
                },
                "address-postalcode": {
                    "type": "string",
                    "expression": "address.postalCode"
                },
                "address-country": {
                    "type": "string",
                    "expression": "address.country"
                },
                "phonetic": {
                    "type": "string",
                    "expression": "name"
                },
                "phone": {
                    "type": "token",
                    "expression": "telecom"
                },
                "patient": {
                    "type": "reference",
                    "expression": "patient"
                },
                "name": {
                    "type": "string",
                    "expression": "name"
                },
                "address-use": {
                    "type": "token",
                    "expression": "address.use"
                },
                "telecom": {
                    "type": "token",
                    "expression": "telecom"
                },
                "address-city": {
                    "type": "string",
                    "expression": "address.city"
                },
                "relationship": {
                    "type": "token",
                    "expression": "relationship"
                },
                "email": {
                    "type": "token",
                    "expression": "telecom"
                }
            },
            "RequestGroup": {
                "authored": {
                    "type": "date",
                    "expression": "authoredOn"
                },
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "code": {
                    "type": "token",
                    "expression": "code"
                },
                "subject": {
                    "type": "reference",
                    "expression": "subject"
                },
                "author": {
                    "type": "reference",
                    "expression": "author"
                },
                "instantiates-canonical": {
                    "type": "reference",
                    "expression": "instantiatesCanonical"
                },
                "encounter": {
                    "type": "reference",
                    "expression": "encounter"
                },
                "priority": {
                    "type": "token",
                    "expression": "priority"
                },
                "intent": {
                    "type": "token",
                    "expression": "intent"
                },
                "participant": {
                    "type": "reference",
                    "expression": "action.participant"
                },
                "group-identifier": {
                    "type": "token",
                    "expression": "groupIdentifier"
                },
                "patient": {
                    "type": "reference",
                    "expression": "subject"
                },
                "instantiates-uri": {
                    "type": "uri",
                    "expression": "instantiatesUri"
                },
                "status": {
                    "type": "token",
                    "expression": "status"
                }
            },
            "ResearchDefinition": {
                "date": {
                    "type": "date",
                    "expression": "date"
                },
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "successor": {
                    "type": "reference",
                    "expression": "relatedArtifact.resource"
                },
                "context-type-value": {
                    "type": "composite",
                    "expression": "useContext"
                },
                "jurisdiction": {
                    "type": "token",
                    "expression": "jurisdiction"
                },
                "description": {
                    "type": "string",
                    "expression": "description"
                },
                "derived-from": {
                    "type": "reference",
                    "expression": "relatedArtifact.resource"
                },
                "context-type": {
                    "type": "token",
                    "expression": "useContext.code"
                },
                "predecessor": {
                    "type": "reference",
                    "expression": "relatedArtifact.resource"
                },
                "title": {
                    "type": "string",
                    "expression": "title"
                },
                "composed-of": {
                    "type": "reference",
                    "expression": "relatedArtifact.resource"
                },
                "version": {
                    "type": "token",
                    "expression": "version"
                },
                "url": {
                    "type": "uri",
                    "expression": "url"
                },
                "context-quantity": {
                    "type": "quantity",
                    "expression": "useContext.valueQuantity"
                },
                "effective": {
                    "type": "date",
                    "expression": "effectivePeriod"
                },
                "depends-on": {
                    "type": "reference",
                    "expression": "relatedArtifact.resource"
                },
                "name": {
                    "type": "string",
                    "expression": "name"
                },
                "context": {
                    "type": "token",
                    "expression": "useContext.valueCodeableConcept"
                },
                "publisher": {
                    "type": "string",
                    "expression": "publisher"
                },
                "topic": {
                    "type": "token",
                    "expression": "topic"
                },
                "context-type-quantity": {
                    "type": "composite",
                    "expression": "useContext"
                },
                "status": {
                    "type": "token",
                    "expression": "status"
                }
            },
            "ResearchElementDefinition": {
                "date": {
                    "type": "date",
                    "expression": "date"
                },
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "successor": {
                    "type": "reference",
                    "expression": "relatedArtifact.resource"
                },
                "context-type-value": {
                    "type": "composite",
                    "expression": "useContext"
                },
                "jurisdiction": {
                    "type": "token",
                    "expression": "jurisdiction"
                },
                "description": {
                    "type": "string",
                    "expression": "description"
                },
                "derived-from": {
                    "type": "reference",
                    "expression": "relatedArtifact.resource"
                },
                "context-type": {
                    "type": "token",
                    "expression": "useContext.code"
                },
                "predecessor": {
                    "type": "reference",
                    "expression": "relatedArtifact.resource"
                },
                "title": {
                    "type": "string",
                    "expression": "title"
                },
                "composed-of": {
                    "type": "reference",
                    "expression": "relatedArtifact.resource"
                },
                "version": {
                    "type": "token",
                    "expression": "version"
                },
                "url": {
                    "type": "uri",
                    "expression": "url"
                },
                "context-quantity": {
                    "type": "quantity",
                    "expression": "useContext.valueQuantity"
                },
                "effective": {
                    "type": "date",
                    "expression": "effectivePeriod"
                },
                "depends-on": {
                    "type": "reference",
                    "expression": "relatedArtifact.resource"
                },
                "name": {
                    "type": "string",
                    "expression": "name"
                },
                "context": {
                    "type": "token",
                    "expression": "useContext.valueCodeableConcept"
                },
                "publisher": {
                    "type": "string",
                    "expression": "publisher"
                },
                "topic": {
                    "type": "token",
                    "expression": "topic"
                },
                "context-type-quantity": {
                    "type": "composite",
                    "expression": "useContext"
                },
                "status": {
                    "type": "token",
                    "expression": "status"
                }
            },
            "ResearchStudy": {
                "date": {
                    "type": "date",
                    "expression": "period"
                },
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "partof": {
                    "type": "reference",
                    "expression": "partOf"
                },
                "sponsor": {
                    "type": "reference",
                    "expression": "sponsor"
                },
                "focus": {
                    "type": "token",
                    "expression": "focus"
                },
                "principalinvestigator": {
                    "type": "reference",
                    "expression": "principalInvestigator"
                },
                "title": {
                    "type": "string",
                    "expression": "title"
                },
                "protocol": {
                    "type": "reference",
                    "expression": "protocol"
                },
                "site": {
                    "type": "reference",
                    "expression": "site"
                },
                "location": {
                    "type": "token",
                    "expression": "location"
                },
                "category": {
                    "type": "token",
                    "expression": "category"
                },
                "keyword": {
                    "type": "token",
                    "expression": "keyword"
                },
                "status": {
                    "type": "token",
                    "expression": "status"
                }
            },
            "ResearchSubject": {
                "date": {
                    "type": "date",
                    "expression": "period"
                },
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "study": {
                    "type": "reference",
                    "expression": "study"
                },
                "individual": {
                    "type": "reference",
                    "expression": "individual"
                },
                "patient": {
                    "type": "reference",
                    "expression": "individual"
                },
                "status": {
                    "type": "token",
                    "expression": "status"
                }
            },
            "RiskAssessment": {
                "date": {
                    "type": "date",
                    "expression": "occurrenceDateTime"
                },
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "condition": {
                    "type": "reference",
                    "expression": "condition"
                },
                "performer": {
                    "type": "reference",
                    "expression": "performer"
                },
                "method": {
                    "type": "token",
                    "expression": "method"
                },
                "subject": {
                    "type": "reference",
                    "expression": "subject"
                },
                "patient": {
                    "type": "reference",
                    "expression": "subject"
                },
                "probability": {
                    "type": "number",
                    "expression": "prediction.probabilityDecimal"
                },
                "risk": {
                    "type": "token",
                    "expression": "prediction.qualitativeRisk"
                },
                "encounter": {
                    "type": "reference",
                    "expression": "encounter"
                }
            },
            "RiskEvidenceSynthesis": {
                "date": {
                    "type": "date",
                    "expression": "date"
                },
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "context-type-value": {
                    "type": "composite",
                    "expression": "useContext"
                },
                "jurisdiction": {
                    "type": "token",
                    "expression": "jurisdiction"
                },
                "description": {
                    "type": "string",
                    "expression": "description"
                },
                "context-type": {
                    "type": "token",
                    "expression": "useContext.code"
                },
                "title": {
                    "type": "string",
                    "expression": "title"
                },
                "version": {
                    "type": "token",
                    "expression": "version"
                },
                "url": {
                    "type": "uri",
                    "expression": "url"
                },
                "context-quantity": {
                    "type": "quantity",
                    "expression": "useContext.valueQuantity"
                },
                "effective": {
                    "type": "date",
                    "expression": "effectivePeriod"
                },
                "name": {
                    "type": "string",
                    "expression": "name"
                },
                "context": {
                    "type": "token",
                    "expression": "useContext.valueCodeableConcept"
                },
                "publisher": {
                    "type": "string",
                    "expression": "publisher"
                },
                "context-type-quantity": {
                    "type": "composite",
                    "expression": "useContext"
                },
                "status": {
                    "type": "token",
                    "expression": "status"
                }
            },
            "Schedule": {
                "actor": {
                    "type": "reference",
                    "expression": "actor"
                },
                "date": {
                    "type": "date",
                    "expression": "planningHorizon"
                },
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "specialty": {
                    "type": "token",
                    "expression": "specialty"
                },
                "service-category": {
                    "type": "token",
                    "expression": "serviceCategory"
                },
                "service-type": {
                    "type": "token",
                    "expression": "serviceType"
                },
                "active": {
                    "type": "token",
                    "expression": "active"
                }
            },
            "SearchParameter": {
                "date": {
                    "type": "date",
                    "expression": "date"
                },
                "code": {
                    "type": "token",
                    "expression": "code"
                },
                "context-type-value": {
                    "type": "composite",
                    "expression": "useContext"
                },
                "jurisdiction": {
                    "type": "token",
                    "expression": "jurisdiction"
                },
                "description": {
                    "type": "string",
                    "expression": "description"
                },
                "derived-from": {
                    "type": "reference",
                    "expression": "derivedFrom"
                },
                "context-type": {
                    "type": "token",
                    "expression": "useContext.code"
                },
                "type": {
                    "type": "token",
                    "expression": "type"
                },
                "version": {
                    "type": "token",
                    "expression": "version"
                },
                "url": {
                    "type": "uri",
                    "expression": "url"
                },
                "target": {
                    "type": "token",
                    "expression": "target"
                },
                "context-quantity": {
                    "type": "quantity",
                    "expression": "useContext.valueQuantity"
                },
                "component": {
                    "type": "reference",
                    "expression": "component.definition"
                },
                "name": {
                    "type": "string",
                    "expression": "name"
                },
                "context": {
                    "type": "token",
                    "expression": "useContext.valueCodeableConcept"
                },
                "publisher": {
                    "type": "string",
                    "expression": "publisher"
                },
                "context-type-quantity": {
                    "type": "composite",
                    "expression": "useContext"
                },
                "status": {
                    "type": "token",
                    "expression": "status"
                },
                "base": {
                    "type": "token",
                    "expression": "base"
                }
            },
            "ServiceRequest": {
                "authored": {
                    "type": "date",
                    "expression": "authoredOn"
                },
                "requester": {
                    "type": "reference",
                    "expression": "requester"
                },
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "code": {
                    "type": "token",
                    "expression": "code"
                },
                "performer": {
                    "type": "reference",
                    "expression": "performer"
                },
                "requisition": {
                    "type": "token",
                    "expression": "requisition"
                },
                "replaces": {
                    "type": "reference",
                    "expression": "replaces"
                },
                "subject": {
                    "type": "reference",
                    "expression": "subject"
                },
                "instantiates-canonical": {
                    "type": "reference",
                    "expression": "instantiatesCanonical"
                },
                "encounter": {
                    "type": "reference",
                    "expression": "encounter"
                },
                "occurrence": {
                    "type": "date",
                    "expression": "occurrenceDateTime"
                },
                "priority": {
                    "type": "token",
                    "expression": "priority"
                },
                "intent": {
                    "type": "token",
                    "expression": "intent"
                },
                "performer-type": {
                    "type": "token",
                    "expression": "performerType"
                },
                "based-on": {
                    "type": "reference",
                    "expression": "basedOn"
                },
                "patient": {
                    "type": "reference",
                    "expression": "subject"
                },
                "specimen": {
                    "type": "reference",
                    "expression": "specimen"
                },
                "instantiates-uri": {
                    "type": "uri",
                    "expression": "instantiatesUri"
                },
                "body-site": {
                    "type": "token",
                    "expression": "bodySite"
                },
                "category": {
                    "type": "token",
                    "expression": "category"
                },
                "status": {
                    "type": "token",
                    "expression": "status"
                }
            },
            "Slot": {
                "schedule": {
                    "type": "reference",
                    "expression": "schedule"
                },
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "specialty": {
                    "type": "token",
                    "expression": "specialty"
                },
                "service-category": {
                    "type": "token",
                    "expression": "serviceCategory"
                },
                "appointment-type": {
                    "type": "token",
                    "expression": "appointmentType"
                },
                "service-type": {
                    "type": "token",
                    "expression": "serviceType"
                },
                "start": {
                    "type": "date",
                    "expression": "start"
                },
                "status": {
                    "type": "token",
                    "expression": "status"
                }
            },
            "Specimen": {
                "container": {
                    "type": "token",
                    "expression": "container.type"
                },
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "parent": {
                    "type": "reference",
                    "expression": "parent"
                },
                "container-id": {
                    "type": "token",
                    "expression": "container.identifier"
                },
                "bodysite": {
                    "type": "token",
                    "expression": "collection.bodySite"
                },
                "subject": {
                    "type": "reference",
                    "expression": "subject"
                },
                "patient": {
                    "type": "reference",
                    "expression": "subject"
                },
                "collected": {
                    "type": "date",
                    "expression": "collection.collectedDateTime"
                },
                "accession": {
                    "type": "token",
                    "expression": "accessionIdentifier"
                },
                "type": {
                    "type": "token",
                    "expression": "type"
                },
                "collector": {
                    "type": "reference",
                    "expression": "collection.collector"
                },
                "status": {
                    "type": "token",
                    "expression": "status"
                }
            },
            "SpecimenDefinition": {
                "container": {
                    "type": "token",
                    "expression": "typeTested.container.type"
                },
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "type": {
                    "type": "token",
                    "expression": "typeCollected"
                }
            },
            "StructureDefinition": {
                "date": {
                    "type": "date",
                    "expression": "date"
                },
                "context-type-value": {
                    "type": "composite",
                    "expression": "useContext"
                },
                "jurisdiction": {
                    "type": "token",
                    "expression": "jurisdiction"
                },
                "description": {
                    "type": "string",
                    "expression": "description"
                },
                "context-type": {
                    "type": "token",
                    "expression": "useContext.code"
                },
                "experimental": {
                    "type": "token",
                    "expression": "experimental"
                },
                "title": {
                    "type": "string",
                    "expression": "title"
                },
                "type": {
                    "type": "uri",
                    "expression": "type"
                },
                "context-quantity": {
                    "type": "quantity",
                    "expression": "useContext.valueQuantity"
                },
                "path": {
                    "type": "token",
                    "expression": "snapshot.element.path"
                },
                "context": {
                    "type": "token",
                    "expression": "useContext.valueCodeableConcept"
                },
                "base-path": {
                    "type": "token",
                    "expression": "snapshot.element.base.path"
                },
                "keyword": {
                    "type": "token",
                    "expression": "keyword"
                },
                "context-type-quantity": {
                    "type": "composite",
                    "expression": "useContext"
                },
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "valueset": {
                    "type": "reference",
                    "expression": "snapshot.element.binding.valueSet"
                },
                "kind": {
                    "type": "token",
                    "expression": "kind"
                },
                "abstract": {
                    "type": "token",
                    "expression": "abstract"
                },
                "version": {
                    "type": "token",
                    "expression": "version"
                },
                "url": {
                    "type": "uri",
                    "expression": "url"
                },
                "ext-context": {
                    "type": "token",
                    "expression": "context.type"
                },
                "name": {
                    "type": "string",
                    "expression": "name"
                },
                "publisher": {
                    "type": "string",
                    "expression": "publisher"
                },
                "derivation": {
                    "type": "token",
                    "expression": "derivation"
                },
                "status": {
                    "type": "token",
                    "expression": "status"
                },
                "base": {
                    "type": "reference",
                    "expression": "baseDefinition"
                }
            },
            "StructureMap": {
                "date": {
                    "type": "date",
                    "expression": "date"
                },
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "context-type-value": {
                    "type": "composite",
                    "expression": "useContext"
                },
                "jurisdiction": {
                    "type": "token",
                    "expression": "jurisdiction"
                },
                "description": {
                    "type": "string",
                    "expression": "description"
                },
                "context-type": {
                    "type": "token",
                    "expression": "useContext.code"
                },
                "title": {
                    "type": "string",
                    "expression": "title"
                },
                "version": {
                    "type": "token",
                    "expression": "version"
                },
                "url": {
                    "type": "uri",
                    "expression": "url"
                },
                "context-quantity": {
                    "type": "quantity",
                    "expression": "useContext.valueQuantity"
                },
                "name": {
                    "type": "string",
                    "expression": "name"
                },
                "context": {
                    "type": "token",
                    "expression": "useContext.valueCodeableConcept"
                },
                "publisher": {
                    "type": "string",
                    "expression": "publisher"
                },
                "context-type-quantity": {
                    "type": "composite",
                    "expression": "useContext"
                },
                "status": {
                    "type": "token",
                    "expression": "status"
                }
            },
            "Subscription": {
                "payload": {
                    "type": "token",
                    "expression": "channel.payload"
                },
                "criteria": {
                    "type": "string",
                    "expression": "criteria"
                },
                "contact": {
                    "type": "token",
                    "expression": "contact"
                },
                "type": {
                    "type": "token",
                    "expression": "channel.type"
                },
                "url": {
                    "type": "uri",
                    "expression": "channel.endpoint"
                },
                "status": {
                    "type": "token",
                    "expression": "status"
                }
            },
            "Substance": {
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "container-identifier": {
                    "type": "token",
                    "expression": "instance.identifier"
                },
                "code": {
                    "type": "token",
                    "expression": "code"
                },
                "quantity": {
                    "type": "quantity",
                    "expression": "instance.quantity"
                },
                "substance-reference": {
                    "type": "reference",
                    "expression": "ingredient.substanceReference"
                },
                "expiry": {
                    "type": "date",
                    "expression": "instance.expiry"
                },
                "category": {
                    "type": "token",
                    "expression": "category"
                },
                "status": {
                    "type": "token",
                    "expression": "status"
                }
            },
            "SubstanceSpecification": {
                "code": {
                    "type": "token",
                    "expression": "code.code"
                }
            },
            "SupplyDelivery": {
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "receiver": {
                    "type": "reference",
                    "expression": "receiver"
                },
                "patient": {
                    "type": "reference",
                    "expression": "patient"
                },
                "supplier": {
                    "type": "reference",
                    "expression": "supplier"
                },
                "status": {
                    "type": "token",
                    "expression": "status"
                }
            },
            "SupplyRequest": {
                "requester": {
                    "type": "reference",
                    "expression": "requester"
                },
                "date": {
                    "type": "date",
                    "expression": "authoredOn"
                },
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "subject": {
                    "type": "reference",
                    "expression": "deliverTo"
                },
                "supplier": {
                    "type": "reference",
                    "expression": "supplier"
                },
                "category": {
                    "type": "token",
                    "expression": "category"
                },
                "status": {
                    "type": "token",
                    "expression": "status"
                }
            },
            "Task": {
                "owner": {
                    "type": "reference",
                    "expression": "owner"
                },
                "requester": {
                    "type": "reference",
                    "expression": "requester"
                },
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "business-status": {
                    "type": "token",
                    "expression": "businessStatus"
                },
                "period": {
                    "type": "date",
                    "expression": "executionPeriod"
                },
                "code": {
                    "type": "token",
                    "expression": "code"
                },
                "performer": {
                    "type": "token",
                    "expression": "performerType"
                },
                "subject": {
                    "type": "reference",
                    "expression": "for"
                },
                "focus": {
                    "type": "reference",
                    "expression": "focus"
                },
                "part-of": {
                    "type": "reference",
                    "expression": "partOf"
                },
                "encounter": {
                    "type": "reference",
                    "expression": "encounter"
                },
                "priority": {
                    "type": "token",
                    "expression": "priority"
                },
                "authored-on": {
                    "type": "date",
                    "expression": "authoredOn"
                },
                "intent": {
                    "type": "token",
                    "expression": "intent"
                },
                "group-identifier": {
                    "type": "token",
                    "expression": "groupIdentifier"
                },
                "based-on": {
                    "type": "reference",
                    "expression": "basedOn"
                },
                "patient": {
                    "type": "reference",
                    "expression": "for"
                },
                "modified": {
                    "type": "date",
                    "expression": "lastModified"
                },
                "status": {
                    "type": "token",
                    "expression": "status"
                }
            },
            "TerminologyCapabilities": {
                "date": {
                    "type": "date",
                    "expression": "date"
                },
                "context-type-value": {
                    "type": "composite",
                    "expression": "useContext"
                },
                "jurisdiction": {
                    "type": "token",
                    "expression": "jurisdiction"
                },
                "description": {
                    "type": "string",
                    "expression": "description"
                },
                "context-type": {
                    "type": "token",
                    "expression": "useContext.code"
                },
                "title": {
                    "type": "string",
                    "expression": "title"
                },
                "version": {
                    "type": "token",
                    "expression": "version"
                },
                "url": {
                    "type": "uri",
                    "expression": "url"
                },
                "context-quantity": {
                    "type": "quantity",
                    "expression": "useContext.valueQuantity"
                },
                "name": {
                    "type": "string",
                    "expression": "name"
                },
                "context": {
                    "type": "token",
                    "expression": "useContext.valueCodeableConcept"
                },
                "publisher": {
                    "type": "string",
                    "expression": "publisher"
                },
                "context-type-quantity": {
                    "type": "composite",
                    "expression": "useContext"
                },
                "status": {
                    "type": "token",
                    "expression": "status"
                }
            },
            "TestReport": {
                "result": {
                    "type": "token",
                    "expression": "result"
                },
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "tester": {
                    "type": "string",
                    "expression": "tester"
                },
                "testscript": {
                    "type": "reference",
                    "expression": "testScript"
                },
                "issued": {
                    "type": "date",
                    "expression": "issued"
                },
                "participant": {
                    "type": "uri",
                    "expression": "participant.uri"
                }
            },
            "TestScript": {
                "date": {
                    "type": "date",
                    "expression": "date"
                },
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "context-type-value": {
                    "type": "composite",
                    "expression": "useContext"
                },
                "jurisdiction": {
                    "type": "token",
                    "expression": "jurisdiction"
                },
                "description": {
                    "type": "string",
                    "expression": "description"
                },
                "testscript-capability": {
                    "type": "string",
                    "expression": "metadata.capability.description"
                },
                "context-type": {
                    "type": "token",
                    "expression": "useContext.code"
                },
                "title": {
                    "type": "string",
                    "expression": "title"
                },
                "version": {
                    "type": "token",
                    "expression": "version"
                },
                "url": {
                    "type": "uri",
                    "expression": "url"
                },
                "context-quantity": {
                    "type": "quantity",
                    "expression": "useContext.valueQuantity"
                },
                "name": {
                    "type": "string",
                    "expression": "name"
                },
                "context": {
                    "type": "token",
                    "expression": "useContext.valueCodeableConcept"
                },
                "publisher": {
                    "type": "string",
                    "expression": "publisher"
                },
                "context-type-quantity": {
                    "type": "composite",
                    "expression": "useContext"
                },
                "status": {
                    "type": "token",
                    "expression": "status"
                }
            },
            "ValueSet": {
                "date": {
                    "type": "date",
                    "expression": "date"
                },
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "code": {
                    "type": "token",
                    "expression": "expansion.contains.code"
                },
                "context-type-value": {
                    "type": "composite",
                    "expression": "useContext"
                },
                "jurisdiction": {
                    "type": "token",
                    "expression": "jurisdiction"
                },
                "description": {
                    "type": "string",
                    "expression": "description"
                },
                "context-type": {
                    "type": "token",
                    "expression": "useContext.code"
                },
                "title": {
                    "type": "string",
                    "expression": "title"
                },
                "version": {
                    "type": "token",
                    "expression": "version"
                },
                "url": {
                    "type": "uri",
                    "expression": "url"
                },
                "expansion": {
                    "type": "uri",
                    "expression": "expansion.identifier"
                },
                "reference": {
                    "type": "uri",
                    "expression": "compose.include.system"
                },
                "context-quantity": {
                    "type": "quantity",
                    "expression": "useContext.valueQuantity"
                },
                "name": {
                    "type": "string",
                    "expression": "name"
                },
                "context": {
                    "type": "token",
                    "expression": "useContext.valueCodeableConcept"
                },
                "publisher": {
                    "type": "string",
                    "expression": "publisher"
                },
                "context-type-quantity": {
                    "type": "composite",
                    "expression": "useContext"
                },
                "status": {
                    "type": "token",
                    "expression": "status"
                }
            },
            "VerificationResult": {
                "target": {
                    "type": "reference",
                    "expression": "target"
                }
            },
            "VisionPrescription": {
                "prescriber": {
                    "type": "reference",
                    "expression": "prescriber"
                },
                "identifier": {
                    "type": "token",
                    "expression": "identifier"
                },
                "patient": {
                    "type": "reference",
                    "expression": "patient"
                },
                "datewritten": {
                    "type": "date",
                    "expression": "dateWritten"
                },
                "encounter": {
                    "type": "reference",
                    "expression": "encounter"
                },
                "status": {
                    "type": "token",
                    "expression": "status"
                }
            },
            "_common": {
                "_id": {
                    "type": "token",
                    "description": "Resource id (not a full URL)"
                },
                "_lastUpdated": {
                    "type": "date",
                    "description": "Date last updated. Server has discretion on the boundary precision"
                },
                "_tag": {
                    "type": "token",
                    "description": "Search by a resource tag"
                },
                "_profile": {
                    "type": "uri",
                    "description": "Search for all resources tagged with a profile"
                },
                "_security": {
                    "type": "token",
                    "description": "Search by a security label"
                },
                "_source": {
                    "type": "uri",
                    "description": "Identifies where the resource comes from"
                },
                "_list": {
                    "type": "string",
                    "description": "All resources in nominated list (by id, Type/id, url or one of the magic List types)"
                },
                "_text": {
                    "type": "string",
                    "description": "Text search against the narrative"
                },
                "_content": {
                    "type": "string",
                    "description": "Text search against the entire resource"
                },
                "_has": {
                    "type": "string",
                    "description": ""
                },
                "_type": {
                    "type": "string",
                    "description": ""
                },
                "_query": {
                    "type": "string",
                    "description": "Custom named query"
                }
            },
            "_result": {
                "_sort": {
                    "type": "string",
                    "description": "Order to sort results in (can repeat for inner sort orders)"
                },
                "_summary": {
                    "type": "string",
                    "description": "Just return the summary elements (for resources where this is defined)",
                    "code": [
                        "true",
                        "false"
                    ]
                },
                "_total": {
                    "type": "string",
                    "description": "",
                    "code": [
                        "none",
                        "estimate",
                        "accurate"
                    ]
                },
                "_include": {
                    "type": "string",
                    "description": "Other resources to include in the search results that search matches point to"
                },
                "_revinclude": {
                    "type": "string",
                    "description": "Other resources to include in the search results when they refer to search matches"
                },
                "_elements": {
                    "type": "string",
                    "description": "Specific set of elements be returned as part of a resource in the search results"
                },
                "_contained": {
                    "type": "string",
                    "description": "Whether to return resources contained in other resources in the search matches",
                    "code": [
                        "true",
                        "false",
                        "both"
                    ]
                },
                "_containedType": {
                    "type": "string",
                    "description": "If returning contained resources, whether to return the contained or container resource",
                    "code": [
                        "container",
                        "contained"
                    ]
                }
            }
        },
        "searchParameterModifiers": {
            "number": {
                "eq": {
                    "value": "eq",
                    "display": equalSvgStr,
                    "description": "the value for the parameter in the resource is equal to the provided value"
                },
                "ne": {
                    "value": "ne",
                    "display": notEqualSvgStr,
                    "description": "the value for the parameter in the resource is not equal to the provided value"
                },
                "gt": {
                    "value": "gt",
                    "display": greaterThanSvgStr,
                    "description": "the value for the parameter in the resource is greater than the provided value"
                },
                "lt": {
                    "value": "lt",
                    "display": lessThanSvgStr,
                    "description": "the value for the parameter in the resource is less than the provided value"
                },
                "ge": {
                    "value": "ge",
                    "display": greaterThanEqualSvgStr,
                    "description": "the value for the parameter in the resource is greater or equal to the provided value"
                },
                "le": {
                    "value": "le",
                    "display": lessThanEqualSvgStr,
                    "description": "the value for the parameter in the resource is less or equal to the provided value"
                },
                "sa": {
                    "value": "sa",
                    "display": "Start after",
                    "description": "the value for the parameter in the resource starts after the provided value"
                },
                "eb": {
                    "value": "eb",
                    "display": "End before",
                    "description": "the value for the parameter in the resource ends before the provided value"
                },
                "ap": {
                    "value": "ap",
                    "display": "Approximately",
                    "description": "the value for the parameter in the resource is approximately the same to the provided value."
                }
            },
            "date": {
                "eq": {
                    "value": "eq",
                    "display": equalSvgStr,
                    "description": "the value for the parameter in the resource is equal to the provided value"
                },
                "ne": {
                    "value": "ne",
                    "display": notEqualSvgStr,
                    "description": "the value for the parameter in the resource is not equal to the provided value"
                },
                "gt": {
                    "value": "gt",
                    "display": greaterThanSvgStr,
                    "description": "the value for the parameter in the resource is greater than the provided value"
                },
                "lt": {
                    "value": "lt",
                    "display": lessThanSvgStr,
                    "description": "the value for the parameter in the resource is less than the provided value"
                },
                "ge": {
                    "value": "ge",
                    "display": greaterThanEqualSvgStr,
                    "description": "the value for the parameter in the resource is greater or equal to the provided value"
                },
                "le": {
                    "value": "le",
                    "display": lessThanEqualSvgStr,
                    "description": "the value for the parameter in the resource is less or equal to the provided value"
                },
                "sa": {
                    "value": "sa",
                    "display": "Start after",
                    "description": "the value for the parameter in the resource starts after the provided value"
                },
                "eb": {
                    "value": "eb",
                    "display": "End before",
                    "description": "the value for the parameter in the resource ends before the provided value"
                },
                "ap": {
                    "value": "ap",
                    "display": "Approximately",
                    "description": "the value for the parameter in the resource is approximately the same to the provided value."
                }
            },
            "string": {
                "contains": {
                    "value": "contains",
                    "display": "contains",
                    "description": "It's returns results that include the supplied parameter value anywhere within the field being searched."
                },
                "exact": {
                    "value": "exact",
                    "display": "exact",
                    "description": "It's returns results that match the entire supplied parameter, including casing and accents."
                }
            },
            "token": {
                "text": {
                    "value": "text",
                    "display": "text",
                    "description": "The search parameter is processed as a string that searches text associated with the code/value - either CodeableConcept.text, Coding.display, or Identifier.type.text. In this case, the search functions as a normal string search"
                },
                "not": {
                    "value": "not",
                    "display": "not",
                    "description": "Reverse the code matching described in the paragraph above: return all resources that do not have a matching item. Note that this includes resources that have no value for the parameter - e.g. ?gender:not=male includes all patients that do not have gender = male, including patients that do not have a gender at all"
                },
                "above": {
                    "value": "above",
                    "display": "above",
                    "description": "The search parameter is a concept with the form [system]|[code], and the search parameter tests whether the coding in a resource subsumes the specified search code. For example, the search concept has an is-a relationship with the coding in the resource, and this includes the coding itself."
                },
                "below": {
                    "value": "below",
                    "display": "below",
                    "description": "the search parameter is a concept with the form [system]|[code], and the search parameter tests whether the coding in a resource is subsumed by the specified search code. For example, the coding in the resource has an is-a relationship with the search concept, and this includes the coding itself."
                },
                "in": {
                    "value": "in",
                    "display": "in",
                    "description": "The search parameter is a URI (relative or absolute) that identifies a value set, and the search parameter tests whether the coding is in the specified value set. The reference may be literal (to an address where the value set can be found) or logical (a reference to ValueSet.url). If the server can treat the reference as a literal URL, it does, else it tries to match known logical ValueSet.url values."
                },
                "not-in": {
                    "value": "not-in",
                    "display": "not-in",
                    "description": "The search parameter is a URI (relative or absolute) that identifies a value set, and the search parameter tests whether the coding is not in the specified value set."
                },
                "of-type": {
                    "value": "of-type",
                    "display": "of-type",
                    "description": "The search parameter has the format system|code|value, where the system and code refer to a Identifier.type.coding.system and .code, and match if any of the type codes match. All 3 parts must be present"
                }
            },
            "reference": {},
            "composite": {},
            "quantity": {
                "eq": {
                    "value": "eq",
                    "display": equalSvgStr,
                    "description": "the value for the parameter in the resource is equal to the provided value"
                },
                "ne": {
                    "value": "ne",
                    "display": notEqualSvgStr,
                    "description": "the value for the parameter in the resource is not equal to the provided value"
                },
                "gt": {
                    "value": "gt",
                    "display": greaterThanEqualSvgStr,
                    "description": "the value for the parameter in the resource is greater than the provided value"
                },
                "lt": {
                    "value": "lt",
                    "display": lessThanSvgStr,
                    "description": "the value for the parameter in the resource is less than the provided value"
                },
                "ge": {
                    "value": "ge",
                    "display": greaterThanEqualSvgStr,
                    "description": "the value for the parameter in the resource is greater or equal to the provided value"
                },
                "le": {
                    "value": "le",
                    "display": lessThanEqualSvgStr,
                    "description": "the value for the parameter in the resource is less or equal to the provided value"
                },
                "sa": {
                    "value": "sa",
                    "display": "Start after",
                    "description": "the value for the parameter in the resource starts after the provided value"
                },
                "eb": {
                    "value": "eb",
                    "display": "End before",
                    "description": "the value for the parameter in the resource ends before the provided value"
                },
                "ap": {
                    "value": "ap",
                    "display": "Approximately",
                    "description": "the value for the parameter in the resource is approximately the same to the provided value."
                }
            },
            "uri": {
                "below": {
                    "value": "below",
                    "display": "below",
                    "description": "A search that will return any value sets that have a URL that starts with url"
                },
                "above": {
                    "value": "above",
                    "display": "above",
                    "description": "A search for any value set above a given specific URL"
                }
            },
            "special": {}
        }
    }
}