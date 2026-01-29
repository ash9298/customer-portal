import { useEffect, useState } from "react";
import CasesTable from "./CasesTable";

const CASES = [
  {
    attributes: {
      type: "Case",
      url: "/services/data/v57.0/sobjects/Case/500ds000008hol1AAA",
    },
    Id: "500ds000008hol1AAA",
    CaseNumber: "00098328",
    RecordTypeId: "012TY000000aH3xYAE",
    Description:
      "Leapwork is a strategic Microsoft partner and test automation leader that you can trust to ensure your business stays ahead in the evolving D365 landscape.Leapwork is a strategic Microsoft partner and test automation leader that you can trust to ensure your business stays ahead in the evolving D365 landscape.Leapwork is a strategic Microsoft partner and test automation leader that you can trust to ensure your business stays ahead in the evolving D365 landscape.Leapwork is a strategic Microsoft partner and test automation leader that you can trust to ensure your business stays ahead in the evolving D365 landscape",
    Subject: "Subject 206",
    Owner: {
      attributes: {
        type: "Name",
        url: "/services/data/v57.0/sobjects/Group/00G7Q000000mpZxUAI",
      },
      Name: "Leapwork Support Team",
      Email: null,
    },
    Status: "New",
    Created_Date_Time__c: "2026-01-14T08:32:07.000+0000",
    LastModifiedDate: "2026-01-14T08:32:08.000+0000",
    Legal_Team_Case__c: false,
    Category__c: null,
    Contact: {
      attributes: {
        type: "Contact",
        url: "/services/data/v57.0/sobjects/Contact/003ds00000BzqzOAAR",
      },
      Name: "CPAuto01 Related",
    },
    ContactEmail: "cpauto01@related.com",
  },
  {
    attributes: {
      type: "Case",
      url: "/services/data/v57.0/sobjects/Case/500ds000008hiE9AAI",
    },
    Id: "500ds000008hiE9AAI",
    CaseNumber: "00098327",
    RecordTypeId: "012TY000000aH3xYAE",
    Description: "descripton details 317",
    Subject: "Subject 317",
    Owner: {
      attributes: {
        type: "Name",
        url: "/services/data/v57.0/sobjects/Group/00G7Q000000mpZxUAI",
      },
      Name: "Leapwork Support Team",
      Email: null,
    },
    Status: "New",
    Created_Date_Time__c: "2026-01-14T07:53:00.000+0000",
    LastModifiedDate: "2026-01-14T07:53:01.000+0000",
    Legal_Team_Case__c: false,
    Category__c: null,
    Contact: {
      attributes: {
        type: "Contact",
        url: "/services/data/v57.0/sobjects/Contact/003ds00000BzqzOAAR",
      },
      Name: "CPAuto01 Related",
    },
    ContactEmail: "cpauto01@related.com",
  },
  {
    attributes: {
      type: "Case",
      url: "/services/data/v57.0/sobjects/Case/500ds000008gjIhAAI",
    },
    Id: "500ds000008gjIhAAI",
    CaseNumber: "00098319",
    RecordTypeId: "012TY000000aH3xYAE",
    Description:
      "Leapwork is a strategic Microsoft partner and test automation leader that you can trust to ensure your business stays ahead in the evolving D365 landscape.Leapwork is a strategic Microsoft partner and test automation leader that you can trust to ensure your business stays ahead in the evolving D365 landscape.Leapwork is a strategic Microsoft partner and test automation leader that you can trust to ensure your business stays ahead in the evolving D365 landscape.Leapwork is a strategic Microsoft partner and test automation leader that you can trust to ensure your business stays ahead in the evolving D365 landscape",
    Subject: "Subject 791",
    Owner: {
      attributes: {
        type: "Name",
        url: "/services/data/v57.0/sobjects/Group/00G7Q000000mpZxUAI",
      },
      Name: "Leapwork Support Team",
      Email: null,
    },
    Status: "New",
    Created_Date_Time__c: "2026-01-13T07:52:29.000+0000",
    LastModifiedDate: "2026-01-13T07:52:30.000+0000",
    Legal_Team_Case__c: false,
    Category__c: null,
    Contact: {
      attributes: {
        type: "Contact",
        url: "/services/data/v57.0/sobjects/Contact/003ds00000BzqzOAAR",
      },
      Name: "CPAuto01 Related",
    },
    ContactEmail: "cpauto01@related.com",
  },
  {
    attributes: {
      type: "Case",
      url: "/services/data/v57.0/sobjects/Case/500ds000008gkcvAAA",
    },
    Id: "500ds000008gkcvAAA",
    CaseNumber: "00098318",
    RecordTypeId: "012TY000000aH3xYAE",
    Description: "descripton details 781",
    Subject: "Subject 781",
    Owner: {
      attributes: {
        type: "Name",
        url: "/services/data/v57.0/sobjects/Group/00G7Q000000mpZxUAI",
      },
      Name: "Leapwork Support Team",
      Email: null,
    },
    Status: "New",
    Created_Date_Time__c: "2026-01-13T07:47:28.000+0000",
    LastModifiedDate: "2026-01-13T07:47:29.000+0000",
    Legal_Team_Case__c: false,
    Category__c: null,
    Contact: {
      attributes: {
        type: "Contact",
        url: "/services/data/v57.0/sobjects/Contact/003ds00000BzqzOAAR",
      },
      Name: "CPAuto01 Related",
    },
    ContactEmail: "cpauto01@related.com",
  },
  {
    attributes: {
      type: "Case",
      url: "/services/data/v57.0/sobjects/Case/500ds000008gk54AAA",
    },
    Id: "500ds000008gk54AAA",
    CaseNumber: "00098317",
    RecordTypeId: "012TY000000aH3xYAE",
    Description: "descripton details 151",
    Subject: "Subject 151",
    Owner: {
      attributes: {
        type: "Name",
        url: "/services/data/v57.0/sobjects/Group/00G7Q000000mpZxUAI",
      },
      Name: "Leapwork Support Team",
      Email: null,
    },
    Status: "New",
    Created_Date_Time__c: "2026-01-13T07:43:28.000+0000",
    LastModifiedDate: "2026-01-13T07:43:29.000+0000",
    Legal_Team_Case__c: false,
    Category__c: null,
    Contact: {
      attributes: {
        type: "Contact",
        url: "/services/data/v57.0/sobjects/Contact/003ds00000BzqzOAAR",
      },
      Name: "CPAuto01 Related",
    },
    ContactEmail: "cpauto01@related.com",
  },
  {
    attributes: {
      type: "Case",
      url: "/services/data/v57.0/sobjects/Case/500ds000008gZpeAAE",
    },
    Id: "500ds000008gZpeAAE",
    CaseNumber: "00098315",
    RecordTypeId: "012TY000000aH3xYAE",
    Description: "descripton details 687",
    Subject: "Subject 687",
    Owner: {
      attributes: {
        type: "Name",
        url: "/services/data/v57.0/sobjects/Group/00G7Q000000mpZxUAI",
      },
      Name: "Leapwork Support Team",
      Email: null,
    },
    Status: "New",
    Created_Date_Time__c: "2026-01-13T06:52:02.000+0000",
    LastModifiedDate: "2026-01-13T06:52:04.000+0000",
    Legal_Team_Case__c: false,
    Category__c: null,
    Contact: {
      attributes: {
        type: "Contact",
        url: "/services/data/v57.0/sobjects/Contact/003ds00000BzqzOAAR",
      },
      Name: "CPAuto01 Related",
    },
    ContactEmail: "cpauto01@related.com",
  },
  {
    attributes: {
      type: "Case",
      url: "/services/data/v57.0/sobjects/Case/500ds000008PcZHAA0",
    },
    Id: "500ds000008PcZHAA0",
    CaseNumber: "00098281",
    RecordTypeId: "012TY000000aH3xYAE",
    Description:
      "Leapwork is a strategic Microsoft partner and test automation leader that you can trust to ensure your business stays ahead in the evolving D365 landscape.Leapwork is a strategic Microsoft partner and test automation leader that you can trust to ensure your business stays ahead in the evolving D365 landscape.Leapwork is a strategic Microsoft partner and test automation leader that you can trust to ensure your business stays ahead in the evolving D365 landscape.Leapwork is a strategic Microsoft partner and test automation leader that you can trust to ensure your business stays ahead in the evolving D365 landscape",
    Subject: "Subject 824",
    Owner: {
      attributes: {
        type: "Name",
        url: "/services/data/v57.0/sobjects/Group/00G7Q000000mpZxUAI",
      },
      Name: "Leapwork Support Team",
      Email: null,
    },
    Status: "New",
    Created_Date_Time__c: "2025-12-22T08:20:51.000+0000",
    LastModifiedDate: "2025-12-22T08:20:52.000+0000",
    Legal_Team_Case__c: false,
    Category__c: null,
    Contact: {
      attributes: {
        type: "Contact",
        url: "/services/data/v57.0/sobjects/Contact/003ds00000BzqzOAAR",
      },
      Name: "CPAuto01 Related",
    },
    ContactEmail: "cpauto01@related.com",
  },
  {
    attributes: {
      type: "Case",
      url: "/services/data/v57.0/sobjects/Case/500ds000008PfQ0AAK",
    },
    Id: "500ds000008PfQ0AAK",
    CaseNumber: "00098280",
    RecordTypeId: "012TY000000aH3xYAE",
    Description: "descripton details 170",
    Subject: "Subject 170",
    Owner: {
      attributes: {
        type: "Name",
        url: "/services/data/v57.0/sobjects/Group/00G7Q000000mpZxUAI",
      },
      Name: "Leapwork Support Team",
      Email: null,
    },
    Status: "New",
    Created_Date_Time__c: "2025-12-22T08:14:59.000+0000",
    LastModifiedDate: "2025-12-22T08:15:00.000+0000",
    Legal_Team_Case__c: false,
    Category__c: null,
    Contact: {
      attributes: {
        type: "Contact",
        url: "/services/data/v57.0/sobjects/Contact/003ds00000BzqzOAAR",
      },
      Name: "CPAuto01 Related",
    },
    ContactEmail: "cpauto01@related.com",
  },
  {
    attributes: {
      type: "Case",
      url: "/services/data/v57.0/sobjects/Case/500ds000008PZR4AAO",
    },
    Id: "500ds000008PZR4AAO",
    CaseNumber: "00098279",
    RecordTypeId: "012TY000000aH3xYAE",
    Description: "descripton details 841",
    Subject: "Subject 841",
    Owner: {
      attributes: {
        type: "Name",
        url: "/services/data/v57.0/sobjects/Group/00G7Q000000mpZxUAI",
      },
      Name: "Leapwork Support Team",
      Email: null,
    },
    Status: "New",
    Created_Date_Time__c: "2025-12-22T08:11:04.000+0000",
    LastModifiedDate: "2025-12-22T08:11:05.000+0000",
    Legal_Team_Case__c: false,
    Category__c: null,
    Contact: {
      attributes: {
        type: "Contact",
        url: "/services/data/v57.0/sobjects/Contact/003ds00000BzqzOAAR",
      },
      Name: "CPAuto01 Related",
    },
    ContactEmail: "cpauto01@related.com",
  },
  {
    attributes: {
      type: "Case",
      url: "/services/data/v57.0/sobjects/Case/500ds000008Pa5VAAS",
    },
    Id: "500ds000008Pa5VAAS",
    CaseNumber: "00098278",
    RecordTypeId: "012TY000000aH3xYAE",
    Description: "descripton details 225",
    Subject: "Subject 225",
    Owner: {
      attributes: {
        type: "Name",
        url: "/services/data/v57.0/sobjects/Group/00G7Q000000mpZxUAI",
      },
      Name: "Leapwork Support Team",
      Email: null,
    },
    Status: "New",
    Created_Date_Time__c: "2025-12-22T07:27:08.000+0000",
    LastModifiedDate: "2025-12-22T07:27:10.000+0000",
    Legal_Team_Case__c: false,
    Category__c: null,
    Contact: {
      attributes: {
        type: "Contact",
        url: "/services/data/v57.0/sobjects/Contact/003ds00000BzqzOAAR",
      },
      Name: "CPAuto01 Related",
    },
    ContactEmail: "cpauto01@related.com",
  },
  {
    attributes: {
      type: "Case",
      url: "/services/data/v57.0/sobjects/Case/500ds000007ilQdAAI",
    },
    Id: "500ds000007ilQdAAI",
    CaseNumber: "00098200",
    RecordTypeId: "012TY000000aH3xYAE",
    Description:
      "Leapwork is a strategic Microsoft partner and test automation leader that you can trust to ensure your business stays ahead in the evolving D365 landscape.Leapwork is a strategic Microsoft partner and test automation leader that you can trust to ensure your business stays ahead in the evolving D365 landscape.Leapwork is a strategic Microsoft partner and test automation leader that you can trust to ensure your business stays ahead in the evolving D365 landscape.Leapwork is a strategic Microsoft partner and test automation leader that you can trust to ensure your business stays ahead in the evolving D365 landscape",
    Subject: "Subject 467",
    Owner: {
      attributes: {
        type: "Name",
        url: "/services/data/v57.0/sobjects/Group/00G7Q000000mpZxUAI",
      },
      Name: "Leapwork Support Team",
      Email: null,
    },
    Status: "New",
    Created_Date_Time__c: "2025-11-12T08:16:56.000+0000",
    LastModifiedDate: "2025-11-12T08:16:57.000+0000",
    Legal_Team_Case__c: false,
    Category__c: null,
    Contact: {
      attributes: {
        type: "Contact",
        url: "/services/data/v57.0/sobjects/Contact/003ds00000BzqzOAAR",
      },
      Name: "CPAuto01 Related",
    },
    ContactEmail: "cpauto01@related.com",
  },
  {
    attributes: {
      type: "Case",
      url: "/services/data/v57.0/sobjects/Case/500ds000007ioYAAAY",
    },
    Id: "500ds000007ioYAAAY",
    CaseNumber: "00098199",
    RecordTypeId: "012TY000000aH3xYAE",
    Description: "descripton details 680",
    Subject: "Subject 680",
    Owner: {
      attributes: {
        type: "Name",
        url: "/services/data/v57.0/sobjects/Group/00G7Q000000mpZxUAI",
      },
      Name: "Leapwork Support Team",
      Email: null,
    },
    Status: "New",
    Created_Date_Time__c: "2025-11-12T08:11:34.000+0000",
    LastModifiedDate: "2025-11-12T08:11:34.000+0000",
    Legal_Team_Case__c: false,
    Category__c: null,
    Contact: {
      attributes: {
        type: "Contact",
        url: "/services/data/v57.0/sobjects/Contact/003ds00000BzqzOAAR",
      },
      Name: "CPAuto01 Related",
    },
    ContactEmail: "cpauto01@related.com",
  },
  {
    attributes: {
      type: "Case",
      url: "/services/data/v57.0/sobjects/Case/500ds000007imhnAAA",
    },
    Id: "500ds000007imhnAAA",
    CaseNumber: "00098198",
    RecordTypeId: "012TY000000aH3xYAE",
    Description: "descripton details 397",
    Subject: "Subject 397",
    Owner: {
      attributes: {
        type: "Name",
        url: "/services/data/v57.0/sobjects/Group/00G7Q000000mpZxUAI",
      },
      Name: "Leapwork Support Team",
      Email: null,
    },
    Status: "New",
    Created_Date_Time__c: "2025-11-12T08:07:49.000+0000",
    LastModifiedDate: "2025-11-12T08:07:50.000+0000",
    Legal_Team_Case__c: false,
    Category__c: null,
    Contact: {
      attributes: {
        type: "Contact",
        url: "/services/data/v57.0/sobjects/Contact/003ds00000BzqzOAAR",
      },
      Name: "CPAuto01 Related",
    },
    ContactEmail: "cpauto01@related.com",
  },
  {
    attributes: {
      type: "Case",
      url: "/services/data/v57.0/sobjects/Case/500ds000007in93AAA",
    },
    Id: "500ds000007in93AAA",
    CaseNumber: "00098197",
    RecordTypeId: "012TY000000aH3xYAE",
    Description: "descripton details 600",
    Subject: "Subject 600",
    Owner: {
      attributes: {
        type: "Name",
        url: "/services/data/v57.0/sobjects/Group/00G7Q000000mpZxUAI",
      },
      Name: "Leapwork Support Team",
      Email: null,
    },
    Status: "New",
    Created_Date_Time__c: "2025-11-12T07:32:38.000+0000",
    LastModifiedDate: "2025-11-12T07:32:39.000+0000",
    Legal_Team_Case__c: false,
    Category__c: null,
    Contact: {
      attributes: {
        type: "Contact",
        url: "/services/data/v57.0/sobjects/Contact/003ds00000BzqzOAAR",
      },
      Name: "CPAuto01 Related",
    },
    ContactEmail: "cpauto01@related.com",
  },
];

const Cases = () => {
  const [cases, setCases] = useState(CASES);

  useEffect(() => {
    const processCases = () => {
      const statusOrder = {
        New: 1,
        Open: 2,
        "Pending from Agent": 3,
        "Pending from Customer": 4,
        "On Hold": 5,
        Closed: 6,
      };

      const closedCutoffDate = new Date("2024-06-29");

      const sortCases = (a, b) => {
        const dateA = new Date(a.LastModifiedDate);
        const dateB = new Date(b.LastModifiedDate);

        if (dateB - dateA !== 0) {
          return dateB - dateA;
        }

        return (
          statusOrder[a.Status] - statusOrder[b.Status] ||
          b.Id.localeCompare(a.Id)
        );
      };

      const nonClosedCases = CASES.filter((c) => c.Status !== "Closed").sort(
        sortCases
      );

      const closedCases = CASES.filter(
        (c) =>
          c.Status === "Closed" &&
          new Date(c.LastModifiedDate) >= closedCutoffDate
      ).sort(sortCases);

      setCases([...nonClosedCases, ...closedCases]);
    };

    processCases();
  }, []);

  return <CasesTable cases={cases} />;
};

export default Cases;
