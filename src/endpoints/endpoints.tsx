import { IActivity, IOrganization } from "@/interface/ActivityInterface";
import apiService from "@/libs/utils";

export const getOrganization = async(id:string) => {
    const organizationRes: IOrganization = await apiService.get(`api/v1/organization/${id}`);
      const org = JSON.stringify(organizationRes);
      const data = JSON.parse(org);
      const organizationData = data.response[0].details[0].data;
  
      console.log("THIS IS THE ORG DATA =>", organizationData);
      return organizationData;
}