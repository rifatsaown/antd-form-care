import { Form, Input, Radio } from "antd";

const { TextArea } = Input;

const CarePlanForm = () => {
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
                className="w-2/3 font-bold"
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Client ID"
                name="clientId"
                className="w-2/3 font-bold"
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Supervisory visits every"
                name="supervisoryVisits"
                className="font-bold"
              >
                <Radio.Group defaultValue="other">
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
                    name="visitDays"
                  />
                </Radio.Group>
              </Form.Item>
              <Form.Item
                label="Patient Problem"
                name="patientProblem"
                className="mr-10 font-bold"
              >
                <TextArea rows={6} placeholder="Enter Patient Problem" />
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
                  <Input />
                </Form.Item>
                <Form.Item label="BP" name="bp" className="mx-4 font-bold">
                  <Input defaultValue={"80-100 bpm"} />
                </Form.Item>
                <Form.Item label="P" name="p" className="mx-4 font-bold">
                  <Input />
                </Form.Item>
                <Form.Item label="R" name="r" className="mx-4 font-bold">
                  <Input />
                </Form.Item>
                <Form.Item
                  className="col-span-2 mx-4 font-bold"
                  label="Urine"
                  name="urin"
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  className="col-span-2 row-start-4 mx-4 font-bold"
                  label="Other(Pain)"
                  name="other"
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  className="col-span-2 row-start-5 mx-4 font-bold"
                  label="DNR"
                  name="dnr"
                >
                  <Radio.Group>
                    <Radio.Button className="font-medium" value="yes">
                      Yes
                    </Radio.Button>
                    <Radio.Button className="font-medium" value="no">
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
              <div className="p-3 border-2 mt-2 border-black rounded-xl">
                <Form.Item
                  className="font-bold mt-4"
                  label="Lives Alone"
                  name="livesAlone"
                >
                  <Radio.Group>
                    <Radio.Button className="font-medium" value="yes">
                      Yes
                    </Radio.Button>
                    <Radio.Button className="font-medium" value="no">
                      No
                    </Radio.Button>
                  </Radio.Group>
                </Form.Item>
                <Form.Item
                  className="font-bold"
                  label="Live with Others"
                  name="liveWithOthers"
                >
                  <Radio.Group>
                    <Radio.Button className="font-medium" value="yes">
                      Yes
                    </Radio.Button>
                    <Radio.Button className="font-medium" value="no">
                      No
                    </Radio.Button>
                  </Radio.Group>
                </Form.Item>
                <Form.Item
                  className="font-bold"
                  label="Alone during the day"
                  name="aloneDuringDay"
                >
                  <Radio.Group>
                    <Radio.Button className="font-medium" value="yes">
                      Yes
                    </Radio.Button>
                    <Radio.Button className="font-medium" value="no">
                      No
                    </Radio.Button>
                  </Radio.Group>
                </Form.Item>
                <Form.Item
                  className="font-bold"
                  label="Bed Bound"
                  name="bedBound"
                >
                  <Radio.Group>
                    <Radio.Button className="font-medium" value="yes">
                      Yes
                    </Radio.Button>
                    <Radio.Button className="font-medium" value="no">
                      No
                    </Radio.Button>
                  </Radio.Group>
                </Form.Item>
                <Form.Item
                  className="font-bold"
                  label="Bed Rest/BRPs"
                  name="bedRest"
                >
                  <Radio.Group>
                    <Radio.Button className="font-medium" value="yes">
                      Yes
                    </Radio.Button>
                    <Radio.Button className="font-medium" value="no">
                      No
                    </Radio.Button>
                  </Radio.Group>
                  <Form.Item
                    className="font-bold"
                    label="Up as Tolerated"
                    name="upAsTolerated"
                  >
                    <Radio.Group>
                      <Radio.Button className="font-medium" value="yes">
                        Yes
                      </Radio.Button>
                      <Radio.Button className="font-medium" value="no">
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
                  <TextArea rows={6} className="w-3/4" />
                </Form.Item>
                <Form.Item
                  className="font-bold"
                  label="Partial Weight Bearing"
                  name="partialWeightBearing"
                >
                  <Radio.Group>
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
                  <Radio.Group>
                    <Radio.Button className="font-medium" value="r">
                      R
                    </Radio.Button>
                    <Radio.Button className="font-medium" value="l">
                      L
                    </Radio.Button>
                  </Radio.Group>
                </Form.Item>
              </div>
              <div className="p-3 border-2 mt-2 border-black rounded-xl">
                <Form.Item
                  className="font-bold mt-4"
                  label="Fall precautions"
                  name="fallPrecautions"
                >
                  <Radio.Group>
                    <Radio.Button className="font-medium" value="yes">
                      Yes
                    </Radio.Button>
                    <Radio.Button className="font-medium" value="no">
                      No
                    </Radio.Button>
                  </Radio.Group>
                </Form.Item>
                <Form.Item
                  className="font-bold"
                  label="Special equipment"
                  name="specialEquipment"
                >
                  <Input className="w-2/3" />
                </Form.Item>
                <Form.Item
                  className="font-bold mt-4"
                  label="Speech/Communication deficit"
                  name="speechCommunicationDeficit"
                >
                  <Radio.Group>
                    <Radio.Button className="font-medium" value="yes">
                      Yes
                    </Radio.Button>
                    <Radio.Button className="font-medium" value="no">
                      No
                    </Radio.Button>
                  </Radio.Group>
                </Form.Item>
                <Form.Item
                  className="font-bold mt-4"
                  label="Vision deficit"
                  name="visionDeficit"
                >
                  <Radio.Group>
                    <Radio.Button className="font-medium" value="yes">
                      Yes
                    </Radio.Button>
                    <Radio.Button className="font-medium" value="no">
                      No
                    </Radio.Button>
                  </Radio.Group>
                  <Form.Item
                    className="font-bold mt-4"
                    label="Glassess"
                    name="glassess"
                  >
                    <Radio.Group>
                      <Radio.Button className="font-medium" value="yes">
                        Yes
                      </Radio.Button>
                      <Radio.Button className="font-medium" value="no">
                        No
                      </Radio.Button>
                    </Radio.Group>
                  </Form.Item>
                  <Form.Item
                    className="font-bold mt-4"
                    label="Contacts"
                    name="contacts"
                  >
                    <Radio.Group>
                      <Radio.Button className="font-medium" value="yes">
                        Yes
                      </Radio.Button>
                      <Radio.Button className="font-medium" value="no">
                        No
                      </Radio.Button>
                    </Radio.Group>
                  </Form.Item>
                  <Form.Item
                    className="font-bold mt-4"
                    label="Other"
                    name="fallPrecautions"
                  >
                    <Input className="w-2/4" />
                  </Form.Item>
                </Form.Item>
                <Form.Item
                  className="font-bold mt-4"
                  label="Hearing deficit"
                  name="hearingDeficit"
                >
                  <Radio.Group>
                    <Radio.Button className="font-medium" value="yes">
                      Yes
                    </Radio.Button>
                    <Radio.Button className="font-medium" value="no">
                      No
                    </Radio.Button>
                  </Radio.Group>
                  <Form.Item
                    className="font-bold mt-4"
                    label="Hearing Aid"
                    name="hearingAid"
                  >
                    <Radio.Group>
                      <Radio.Button className="font-medium" value="yes">
                        Yes
                      </Radio.Button>
                      <Radio.Button className="font-medium" value="no">
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
                  <Radio.Group>
                    <Radio.Button className="font-medium" value="yes">
                      Yes
                    </Radio.Button>
                    <Radio.Button className="font-medium" value="no">
                      No
                    </Radio.Button>
                  </Radio.Group>
                  <Form.Item
                    className="font-bold mt-4"
                    label="Upper"
                    name="upper"
                  >
                    <Radio.Group>
                      <Radio.Button className="font-medium" value="yes">
                        Yes
                      </Radio.Button>
                      <Radio.Button className="font-medium" value="no">
                        No
                      </Radio.Button>
                    </Radio.Group>
                  </Form.Item>
                  <Form.Item
                    className="font-bold mt-4"
                    label="Lower"
                    name="lower"
                  >
                    <Radio.Group>
                      <Radio.Button className="font-medium" value="yes">
                        Yes
                      </Radio.Button>
                      <Radio.Button className="font-medium" value="no">
                        No
                      </Radio.Button>
                    </Radio.Group>
                  </Form.Item>
                  <Form.Item
                    className="font-bold mt-4"
                    label="Partial"
                    name="partial"
                  >
                    <Radio.Group>
                      <Radio.Button className="font-medium" value="yes">
                        Yes
                      </Radio.Button>
                      <Radio.Button className="font-medium" value="no">
                        No
                      </Radio.Button>
                    </Radio.Group>
                  </Form.Item>
                </Form.Item>
              </div>
              <div className="p-3 border-2 border-black rounded-xl">
                <Form.Item
                  className="font-bold mt-4"
                  label="Oriented x 3"
                  name="oxygen"
                >
                  <Radio.Group>
                    <Radio.Button className="font-medium" value="yes">
                      Yes
                    </Radio.Button>
                    <Radio.Button className="font-medium" value="no">
                      No
                    </Radio.Button>
                  </Radio.Group>
                  <Form.Item>
                    <Form.Item
                      className="font-bold mt-4"
                      label="Alert"
                      name="alert"
                    >
                      <Radio.Group>
                        <Radio.Button className="font-medium" value="yes">
                          Yes
                        </Radio.Button>
                        <Radio.Button className="font-medium" value="no">
                          No
                        </Radio.Button>
                      </Radio.Group>
                    </Form.Item>
                    <Form.Item
                      className="font-bold mt-4"
                      label="Forgetful/Confused"
                      name="forgetfulConfused"
                    >
                      <Radio.Group>
                        <Radio.Button className="font-medium" value="yes">
                          Yes
                        </Radio.Button>
                        <Radio.Button className="font-medium" value="no">
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
                  <Radio.Group>
                    <Radio.Button className="font-medium" value="yes">
                      Yes
                    </Radio.Button>
                    <Radio.Button className="font-medium" value="no">
                      No
                    </Radio.Button>
                  </Radio.Group>
                </Form.Item>
                <Form.Item
                  className="font-bold mt-4"
                  label="Prosthesis (Specify)"
                  name="bowelIssues"
                >
                  <TextArea className="w-2/3" />
                </Form.Item>
                <Form.Item
                  className="font-bold mt-4"
                  label="Allergies (Specify)"
                  name="allergies"
                >
                  <TextArea className="w-2/3" />
                </Form.Item>
                <Form.Item
                  className="font-bold mt-4"
                  label="Diabetic"
                  name="diabetic"
                >
                  <Radio.Group>
                    <Radio.Button className="font-medium" value="yes">
                      Yes
                    </Radio.Button>
                    <Radio.Button className="font-medium" value="no">
                      No
                    </Radio.Button>
                  </Radio.Group>
                  <Form.Item
                    className="font-bold mt-4"
                    label="Do not cut nails"
                    name="doNotCutNails"
                  >
                    <Radio.Group>
                      <Radio.Button className="font-medium" value="yes">
                        Yes
                      </Radio.Button>
                      <Radio.Button className="font-medium" value="no">
                        No
                      </Radio.Button>
                    </Radio.Group>
                  </Form.Item>
                  <Form.Item
                    className="font-bold mt-4"
                    label="Diet"
                    name="diet"
                  >
                    <TextArea className="w-2/3" />
                  </Form.Item>
                </Form.Item>
                <Form.Item
                  className="font-bold mt-4"
                  label="Seizure precautions"
                  name="bowelIssues"
                >
                  <Radio.Group>
                    <Radio.Button className="font-medium" value="yes">
                      Yes
                    </Radio.Button>
                    <Radio.Button className="font-medium" value="no">
                      No
                    </Radio.Button>
                  </Radio.Group>
                </Form.Item>
              </div>
              <div className="p-3 border-2 border-black rounded-xl">
                <Form.Item
                  className="font-bold mt-4"
                  label="Pressure and Precations"
                  name="pressurePrecations"
                >
                  <Radio.Group>
                    <Radio.Button className="font-medium" value="yes">
                      Yes
                    </Radio.Button>
                    <Radio.Button className="font-medium" value="no">
                      No
                    </Radio.Button>
                  </Radio.Group>
                </Form.Item>
                <Form.Item
                  className="font-bold mt-4"
                  label="Pressure and Precations"
                  name="pressurePrecations"
                >
                  <TextArea rows={7} className="w-3/4" />
                </Form.Item>
                <Form.Item
                  className="font-bold mt-4"
                  label="Bleeeding Precautions"
                  name="bleedingPrecautions"
                >
                  <Radio.Group>
                    <Radio.Button className="font-medium" value="yes">
                      Yes
                    </Radio.Button>
                    <Radio.Button className="font-medium" value="no">
                      No
                    </Radio.Button>
                  </Radio.Group>
                </Form.Item>
                <Form.Item
                  className="font-bold mt-4"
                  label="Watch for"
                  name="watchFor"
                >
                  <Radio.Group>
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
                  <Radio.Group>
                    <Radio.Button className="font-medium" value="yes">
                      Yes
                    </Radio.Button>
                    <Radio.Button className="font-medium" value="no">
                      No
                    </Radio.Button>
                  </Radio.Group>
                </Form.Item>
                <Form.Item
                  className="font-bold mt-4"
                  label="Other (Specify)"
                  name="other"
                >
                  <TextArea rows={10} className="w-3/4" />
                </Form.Item>

              </div>
            </div>
          </section>
        </Form>
      </div>
    </div>
  );
};

export default CarePlanForm;
