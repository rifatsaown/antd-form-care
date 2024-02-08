import { Form, Input, Radio } from "antd";

const { TextArea } = Input;

const data = {
  client: "John Doe",
  clientId: "123456",
  supervisoryVisits: {
    days: "30",
  },
  patientProblem: "Pain in the leg and back due to an accident 2 months ago.",
  paramiterToNotifyAdmin: {
    temp: "98.6",
    bp: "80-100 bpm",
    p: "80",
    r: "20",
    urine: "Clear",
    other: "Pain",
    dnr: true,
  },
  precautionaryInformation1 : {
    livesAlone: true,
    liveWithOthers: false,
    aloneDuringDay: true,
    bedBound: false,
    bedRest: true,
    upAsTolerated: false,
    amputee: "Right Leg Amputee 2 months ago due to an accident.",
    partialWeightBearing: "r",
    nonWeightBearing: "l",
  },
  precautionaryInformation2 : {
    fallPrecautions: true,
    specialEquipment: "Walker",
    speechDeficit: true,
    visionDeficit: {
      deficit: true,
      glassess: true,
      contacts: false,
      other: "Cataract in the left eye. Surgery scheduled next month.",
    },
    hearingDeficit: {
      deficit: true,
      hearingAid: true,
    },
    dentures: {
      value: true,
      upper: true,
      lower: false,
      partial: true,
    },
  },
  precautionaryInformation3 : {
    oxygen: true,
    alert: true,
    forgetfulConfused: false,
    urinaryIssues: true,
    prosthesis: "Right Leg Prosthesis",
    allergies: "Allergic to Penicillin",
    diabetic: true,
    doNotCutNails: true,
    diet: "Low Carb",
    seizurePrecautions: true,
  },
  precautionaryInformation4 : {
    pressurePrecations: true,
    infectionPrecautions: "Wash hands before and after every visit. Wear gloves and mask.",
    bleedingPrecautions: true,
    watchFor: "hyper",
    proneToFractures: true,
    other: "Prone to bed sores. Needs to be turned every 2 hours.",
  },
};


// Care Plan Component Start
const CarePlan = () => {
  return (
    <div className="container mx-auto px-4 py-5 ">
      <h1 className="text-3xl font-bold mb-5">CARE PLAN</h1>
      <div className="shadow-lg border-black border-2 rounded-xl">
        <Form className="p-5">
          {/*1st Section Basic Client Details Start*/}
          <section className="lg:grid grid-cols-5 grid-rows-3 gap-0">
            <div className="col-span-3 row-span-3">
              <Form.Item
                label="Client"
                name="client"
                className="lg:w-2/3 font-bold"
              >
                <Input defaultValue={data.client} />
              </Form.Item>
              <Form.Item
                label="Client ID"
                name="clientId"
                className="lg:w-2/3 font-bold"
              >
                <Input defaultValue={data.clientId} />
              </Form.Item>
              <Form.Item
                label="Supervisory visits every"
                name="supervisoryVisits"
                className="font-bold"
              >
                <div>
                  {data.supervisoryVisits.days === "30" || data.supervisoryVisits.days === "14" || data.supervisoryVisits.days === "60" ? (
                    <Radio.Group defaultValue={data.supervisoryVisits.days}>
                      <Radio.Button className="font-medium" value="14">
                        14 days
                      </Radio.Button>
                      <Radio.Button className="font-medium" value="30">
                        30 days
                      </Radio.Button>
                      <Radio.Button className="font-medium" value="60">
                        60 days
                      </Radio.Button>
                      <Radio.Button className="font-medium" value="other">
                        Others(Specify)
                      </Radio.Button>
                      <Input
                        className="w-1/3"
                        placeholder="Enter Days"
                        name="supervisoryVisits"
                      />
                    </Radio.Group>
                  ) : (
                    <Radio.Group defaultValue={"other"}>
                      <Radio.Button className="font-medium" value="14">
                        14 days
                      </Radio.Button>
                      <Radio.Button className="font-medium" value="30">
                        30 days
                      </Radio.Button>
                      <Radio.Button className="font-medium" value="60">
                        60 days
                      </Radio.Button>
                      <Radio.Button className="font-medium" value="other">
                        Others(Specify)
                      </Radio.Button>
                      <Input
                        className="w-1/3"
                        placeholder="Enter Days"
                        name="supervisoryVisits"
                        defaultValue={data.supervisoryVisits.days}
                      />
                    </Radio.Group>
                  )}
                </div>
              </Form.Item>
              <Form.Item
                label="Patient Problem"
                name="patientProblem"
                className="lg:mr-10 font-bold"
              >
                <TextArea defaultValue={data.patientProblem} rows={6} placeholder="Enter Patient Problem" />
              </Form.Item>
            </div>
            <div className="col-span-2 row-span-3 col-start-4 lg:border-l-2 border-black">
              <div className="text-center">
                <p className="text-lg inline-block uppercase font-semibold bg-black text-white p-2 rounded-lg ">
                  parameters to notify administrator
                </p>
              </div>
              <div className="grid grid-cols-2 grid-rows-5 gap-1 mt-2">
                <Form.Item label="Temp" name="temp" className="mx-4 font-bold">
                  <Input defaultValue={data.paramiterToNotifyAdmin.temp}/>
                </Form.Item>
                <Form.Item label="BP" name="bp" className="mx-4 font-bold">
                  <Input defaultValue={data.paramiterToNotifyAdmin.bp} />
                </Form.Item>
                <Form.Item label="P" name="p" className="mx-4 font-bold">
                  <Input defaultValue={data.paramiterToNotifyAdmin.p} />
                </Form.Item>
                <Form.Item label="R" name="r" className="mx-4 font-bold">
                  <Input defaultValue={data.paramiterToNotifyAdmin.r}/>
                </Form.Item>
                <Form.Item
                  className="col-span-2 mx-4 font-bold"
                  label="Urine"
                  name="urin"
                >
                  <Input defaultValue={data.paramiterToNotifyAdmin.urine}/>
                </Form.Item>
                <Form.Item
                  className="col-span-2 row-start-4 mx-4 font-bold"
                  label="Other(Pain)"
                  name="other"
                >
                  <Input defaultValue={data.paramiterToNotifyAdmin.other}/>
                </Form.Item>
                <Form.Item
                  className="col-span-2 row-start-5 mx-4 font-bold"
                  label="DNR"
                  name="dnr"
                >
                  <Radio.Group defaultValue={data.paramiterToNotifyAdmin.dnr}>
                    <Radio.Button className="font-medium" value={true}>
                      Yes
                    </Radio.Button>
                    <Radio.Button className="font-medium" value={false}>
                      No
                    </Radio.Button>
                  </Radio.Group>
                </Form.Item>
              </div>
            </div>
          </section>
          {/*1st Section Basic Client Details End*/}

          <hr className="mt-5" />

          {/*2nd Section Care Plan Start*/}
          <section className="mt-5">
            <div className="text-center">
              <p className="text-lg uppercase font-semibold bg-black text-white p-2 rounded-lg ">
                Precautionary and other pertinent information -{" "}
                <span className="capitalize">Mark all that apply</span>
              </p>
            </div>
            <div className="lg:grid grid-cols-2 grid-rows-2 gap-4">

              {/* 1st Part Start*/}
              <div className="p-3 border-2 mt-2 border-black rounded-xl">
                <Form.Item
                  className="font-bold mt-4"
                  label="Lives Alone"
                  name="livesAlone"
                >
                  <Radio.Group defaultValue={data.precautionaryInformation1.livesAlone}>
                    <Radio.Button className="font-medium" value={true}>
                      Yes
                    </Radio.Button>
                    <Radio.Button className="font-medium" value={false}>
                      No
                    </Radio.Button>
                  </Radio.Group>
                </Form.Item>
                <Form.Item
                  className="font-bold"
                  label="Live with Others"
                  name="liveWithOthers"
                >
                  <Radio.Group defaultValue={data.precautionaryInformation1.liveWithOthers}>
                    <Radio.Button className="font-medium" value={true}>
                      Yes
                    </Radio.Button>
                    <Radio.Button className="font-medium" value={false}>
                      No
                    </Radio.Button>
                  </Radio.Group>
                </Form.Item>
                <Form.Item
                  className="font-bold"
                  label="Alone during the day"
                  name="aloneDuringDay"
                >
                  <Radio.Group defaultValue={data.precautionaryInformation1.aloneDuringDay}>
                    <Radio.Button className="font-medium" value={true}>
                      Yes
                    </Radio.Button>
                    <Radio.Button className="font-medium" value={false}>
                      No
                    </Radio.Button>
                  </Radio.Group>
                </Form.Item>
                <Form.Item
                  className="font-bold"
                  label="Bed Bound"
                  name="bedBound"
                >
                  <Radio.Group defaultValue={data.precautionaryInformation1.bedBound}>
                    <Radio.Button className="font-medium" value={true}>
                      Yes
                    </Radio.Button>
                    <Radio.Button className="font-medium" value={false}>
                      No
                    </Radio.Button>
                  </Radio.Group>
                </Form.Item>
                <Form.Item
                  className="font-bold"
                  label="Bed Rest/BRPs"
                  name="bedRest"
                >
                  <Radio.Group defaultValue={data.precautionaryInformation1.bedRest}>
                    <Radio.Button className="font-medium" value={true}>
                      Yes
                    </Radio.Button>
                    <Radio.Button className="font-medium" value={false}>
                      No
                    </Radio.Button>
                  </Radio.Group>
                  <Form.Item
                    className="font-bold"
                    label="Up as Tolerated"
                    name="upAsTolerated"
                  >
                    <Radio.Group defaultValue={data.precautionaryInformation1.upAsTolerated}>
                      <Radio.Button className="font-medium" value={true}>
                        Yes
                      </Radio.Button>
                      <Radio.Button className="font-medium" value={false}>
                        No
                      </Radio.Button>
                    </Radio.Group>
                  </Form.Item>
                </Form.Item>
                <Form.Item
                  className="font-bold"
                  label="Amputee (Specify)"
                  name="upAsTolerated"
                >
                  <TextArea defaultValue={data.precautionaryInformation1.amputee} rows={6} className="lg:w-3/4" />
                </Form.Item>
                <Form.Item
                  className="font-bold"
                  label="Partial Weight Bearing"
                  name="partialWeightBearing"
                >
                  <Radio.Group defaultValue={data.precautionaryInformation1.partialWeightBearing}>
                    <Radio.Button className="font-medium" value="r">
                      R
                    </Radio.Button>
                    <Radio.Button className="font-medium" value="l">
                      L
                    </Radio.Button>
                  </Radio.Group>
                </Form.Item>
                <Form.Item
                  className="font-bold"
                  label="Non-Weight Bearing"
                  name="nonWeightBearing"
                >
                  <Radio.Group defaultValue={data.precautionaryInformation1.nonWeightBearing}>
                    <Radio.Button className="font-medium" value="r">
                      R
                    </Radio.Button>
                    <Radio.Button className="font-medium" value="l">
                      L
                    </Radio.Button>
                  </Radio.Group>
                </Form.Item>
              </div>
              {/* 1st Part End*/}

              {/* 2nd Part Start*/}
              <div className="p-3 border-2 mt-2 border-black rounded-xl">
                <Form.Item
                  className="font-bold mt-4"
                  label="Fall precautions"
                  name="fallPrecautions"
                >
                  <Radio.Group defaultValue={data.precautionaryInformation2.fallPrecautions}>
                    <Radio.Button className="font-medium" value={true}>
                      Yes
                    </Radio.Button>
                    <Radio.Button className="font-medium" value={false}>
                      No
                    </Radio.Button>
                  </Radio.Group>
                </Form.Item>
                <Form.Item
                  className="font-bold"
                  label="Special equipment"
                  name="specialEquipment"
                >
                  <Input defaultValue={data.precautionaryInformation2.specialEquipment} className="lg:w-2/3" />
                </Form.Item>
                <Form.Item
                  className="font-bold mt-4"
                  label="Speech/Communication deficit"
                  name="speechCommunicationDeficit"
                >
                  <Radio.Group defaultValue={data.precautionaryInformation2.speechDeficit}>
                    <Radio.Button className="font-medium" value={true}>
                      Yes
                    </Radio.Button>
                    <Radio.Button className="font-medium" value={false}>
                      No
                    </Radio.Button>
                  </Radio.Group>
                </Form.Item>
                <Form.Item
                  className="font-bold mt-4"
                  label="Vision deficit"
                  name="visionDeficit"
                >
                  <Radio.Group defaultValue={data.precautionaryInformation2.visionDeficit.deficit}>
                    <Radio.Button className="font-medium" value={true}>
                      Yes
                    </Radio.Button>
                    <Radio.Button className="font-medium" value={false}>
                      No
                    </Radio.Button>
                  </Radio.Group>
                  <Form.Item
                    className="font-bold mt-4"
                    label="Glassess"
                    name="glassess"
                  >
                    <Radio.Group defaultValue={data.precautionaryInformation2.visionDeficit.glassess}>
                      <Radio.Button className="font-medium" value={true}>
                        Yes
                      </Radio.Button>
                      <Radio.Button className="font-medium" value={false}>
                        No
                      </Radio.Button>
                    </Radio.Group>
                  </Form.Item>
                  <Form.Item
                    className="font-bold mt-4"
                    label="Contacts"
                    name="contacts"
                  >
                    <Radio.Group defaultValue={data.precautionaryInformation2.visionDeficit.contacts}>
                      <Radio.Button className="font-medium" value={true}>
                        Yes
                      </Radio.Button>
                      <Radio.Button className="font-medium" value={false}>
                        No
                      </Radio.Button>
                    </Radio.Group>
                  </Form.Item>
                  <Form.Item
                    className="font-bold mt-4"
                    label="Other"
                    name="fallPrecautions"
                  >
                    <Input defaultValue={data.precautionaryInformation2.visionDeficit.other} className="lg:w-2/4" />
                  </Form.Item>
                </Form.Item>
                <Form.Item
                  className="font-bold mt-4"
                  label="Hearing deficit"
                  name="hearingDeficit"
                >
                  <Radio.Group defaultValue={data.precautionaryInformation2.hearingDeficit.deficit}>
                    <Radio.Button className="font-medium" value={true}>
                      Yes
                    </Radio.Button>
                    <Radio.Button className="font-medium" value={false}>
                      No
                    </Radio.Button>
                  </Radio.Group>
                  <Form.Item
                    className="font-bold mt-4"
                    label="Hearing Aid"
                    name="hearingAid"
                  >
                    <Radio.Group defaultValue={data.precautionaryInformation2.hearingDeficit.hearingAid}>
                      <Radio.Button className="font-medium" value={true}>
                        Yes
                      </Radio.Button>
                      <Radio.Button className="font-medium" value={false}>
                        No
                      </Radio.Button>
                    </Radio.Group>
                  </Form.Item>
                </Form.Item>
                <Form.Item
                  className="font-bold mt-4"
                  label="Dentures"
                  name="dentures"
                >
                  <Radio.Group defaultValue={data.precautionaryInformation2.dentures.value}>
                    <Radio.Button className="font-medium" value={true}>
                      Yes
                    </Radio.Button>
                    <Radio.Button className="font-medium" value={false}>
                      No
                    </Radio.Button>
                  </Radio.Group>
                  <Form.Item
                    className="font-bold mt-4"
                    label="Upper"
                    name="upper"
                  >
                    <Radio.Group defaultValue={data.precautionaryInformation2.dentures.upper}>
                      <Radio.Button className="font-medium" value={true}>
                        Yes
                      </Radio.Button>
                      <Radio.Button className="font-medium" value={false}>
                        No
                      </Radio.Button>
                    </Radio.Group>
                  </Form.Item>
                  <Form.Item
                    className="font-bold mt-4"
                    label="Lower"
                    name="lower"
                  >
                    <Radio.Group  defaultValue={data.precautionaryInformation2.dentures.lower}>
                      <Radio.Button className="font-medium" value={true}>
                        Yes
                      </Radio.Button>
                      <Radio.Button className="font-medium" value={false}>
                        No
                      </Radio.Button>
                    </Radio.Group>
                  </Form.Item>
                  <Form.Item
                    className="font-bold mt-4"
                    label="Partial"
                    name="partial"
                  >
                    <Radio.Group  defaultValue={data.precautionaryInformation2.dentures.partial}>
                      <Radio.Button className="font-medium" value={true}>
                        Yes
                      </Radio.Button>
                      <Radio.Button className="font-medium" value={false}>
                        No
                      </Radio.Button>
                    </Radio.Group>
                  </Form.Item>
                </Form.Item>
              </div>
              {/* 2nd Part End*/}

              {/* 3rd Part Start*/}
              <div className="p-3 border-2 border-black rounded-xl">
                <Form.Item
                  className="font-bold mt-4"
                  label="Oriented x 3"
                  name="oxygen"
                >
                  <Radio.Group defaultValue={data.precautionaryInformation3.oxygen}>
                    <Radio.Button className="font-medium" value={true}>
                      Yes
                    </Radio.Button>
                    <Radio.Button className="font-medium" value={false}>
                      No
                    </Radio.Button>
                  </Radio.Group>
                  <Form.Item>
                    <Form.Item
                      className="font-bold mt-4"
                      label="Alert"
                      name="alert"
                    >
                      <Radio.Group defaultValue={data.precautionaryInformation3.alert}>
                        <Radio.Button className="font-medium" value={true}>
                          Yes
                        </Radio.Button>
                        <Radio.Button className="font-medium" value={false}>
                          No
                        </Radio.Button>
                      </Radio.Group>
                    </Form.Item>
                    <Form.Item
                      className="font-bold mt-4"
                      label="Forgetful/Confused"
                      name="forgetfulConfused"
                    >
                      <Radio.Group defaultValue={data.precautionaryInformation3.forgetfulConfused}>
                        <Radio.Button className="font-medium" value={true}>
                          Yes
                        </Radio.Button>
                        <Radio.Button className="font-medium" value={false}>
                          No
                        </Radio.Button>
                      </Radio.Group>
                    </Form.Item>
                  </Form.Item>
                </Form.Item>
                <Form.Item
                  className="font-bold mt-4"
                  label="Urinary issues"
                  name="urinaryIssues"
                >
                  <Radio.Group defaultValue={data.precautionaryInformation3.urinaryIssues}>
                    <Radio.Button className="font-medium" value={true}>
                      Yes
                    </Radio.Button>
                    <Radio.Button className="font-medium" value={false}>
                      No
                    </Radio.Button>
                  </Radio.Group>
                </Form.Item>
                <Form.Item
                  className="font-bold mt-4"
                  label="Prosthesis (Specify)"
                  name="prosthesis"
                >
                  <TextArea defaultValue={data.precautionaryInformation3.prosthesis} className="lg:w-2/3" />
                </Form.Item>
                <Form.Item
                  className="font-bold mt-4"
                  label="Allergies (Specify)"
                  name="allergies"
                >
                  <TextArea defaultValue={data.precautionaryInformation3.allergies} className="lg:w-2/3" />
                </Form.Item>
                <Form.Item
                  className="font-bold mt-4"
                  label="Diabetic"
                  name="diabetic"
                >
                  <Radio.Group defaultValue={data.precautionaryInformation3.diabetic}>
                    <Radio.Button className="font-medium" value={true}>
                      Yes
                    </Radio.Button>
                    <Radio.Button className="font-medium" value={false}>
                      No
                    </Radio.Button>
                  </Radio.Group>
                  <Form.Item
                    className="font-bold mt-4"
                    label="Do not cut nails"
                    name="doNotCutNails"
                  >
                    <Radio.Group defaultValue={data.precautionaryInformation3.doNotCutNails}>
                      <Radio.Button className="font-medium" value={true}>
                        Yes
                      </Radio.Button>
                      <Radio.Button className="font-medium" value={false}>
                        No
                      </Radio.Button>
                    </Radio.Group>
                  </Form.Item>
                  <Form.Item
                    className="font-bold mt-4"
                    label="Diet"
                    name="diet"
                  >
                    <TextArea defaultValue={data.precautionaryInformation3.diet} className="lg:w-2/3" />
                  </Form.Item>
                </Form.Item>
                <Form.Item
                  className="font-bold mt-4"
                  label="Seizure precautions"
                  name="seizurePrecautions"
                >
                  <Radio.Group defaultValue={data.precautionaryInformation3.seizurePrecautions}>
                    <Radio.Button className="font-medium" value={true}>
                      Yes
                    </Radio.Button>
                    <Radio.Button className="font-medium" value={false}>
                      No
                    </Radio.Button>
                  </Radio.Group>
                </Form.Item>
              </div>
              {/* 3rd Part End*/}

              {/* 4th Part Start*/}
              <div className="p-3 border-2 border-black rounded-xl">
                <Form.Item
                  className="font-bold mt-4"
                  label="Pressure and Precations"
                  name="pressurePrecations"
                >
                  <Radio.Group defaultValue={data.precautionaryInformation4.pressurePrecations}>
                    <Radio.Button className="font-medium" value={true}>
                      Yes
                    </Radio.Button>
                    <Radio.Button className="font-medium" value={false}>
                      No
                    </Radio.Button>
                  </Radio.Group>
                </Form.Item>
                <Form.Item
                  className="font-bold mt-4"
                  label="Infection Precautions"
                  name="infectionPrecautions"
                >
                  <TextArea defaultValue={data.precautionaryInformation4.infectionPrecautions} rows={7} className="lg:w-3/4" />
                </Form.Item>
                <Form.Item
                  className="font-bold mt-4"
                  label="Bleeeding Precautions"
                  name="bleedingPrecautions"
                >
                  <Radio.Group defaultValue={data.precautionaryInformation4.bleedingPrecautions}>
                    <Radio.Button className="font-medium" value={true}>
                      Yes
                    </Radio.Button>
                    <Radio.Button className="font-medium" value={false}>
                      No
                    </Radio.Button>
                  </Radio.Group>
                </Form.Item>
                <Form.Item
                  className="font-bold mt-4"
                  label="Watch for"
                  name="watchFor"
                >
                  <Radio.Group defaultValue={data.precautionaryInformation4.watchFor}>
                    <Radio.Button className="font-medium" value="hyper">
                      Hyper
                    </Radio.Button>
                    <Radio.Button className="font-medium" value="hypoglyoerria">
                      Hypoglyoerria
                    </Radio.Button>
                  </Radio.Group>
                </Form.Item>
                <Form.Item
                  className="font-bold mt-4"
                  label="Prone to Fractures"
                  name="proneToFractures"
                >
                  <Radio.Group defaultValue={data.precautionaryInformation4.proneToFractures}>
                    <Radio.Button className="font-medium" value={true}>
                      Yes
                    </Radio.Button>
                    <Radio.Button className="font-medium" value={false}>
                      No
                    </Radio.Button>
                  </Radio.Group>
                </Form.Item>
                <Form.Item
                  className="font-bold mt-4"
                  label="Other (Specify)"
                  name="other"
                >
                  <TextArea defaultValue={data.precautionaryInformation4.other} rows={10} className="lg:w-3/4" />
                </Form.Item>
              </div>
              {/* 4th Part End*/}
            </div>
          </section>
        </Form>
      </div>
    </div>
  );
};

export default CarePlan;
