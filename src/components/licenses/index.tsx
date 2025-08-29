import { useEffect, useState } from "react";
import { checkCustomer, getAllLicenses } from "../../api/licenseAPI";
import LicenseTable from "./LicenseTable";

type LicenseInfo = {
  LicenseId: number;
  LicenseKey: string;
  Email: string;
  Status: string;
  ExpirationDate: string;
};

type CustomFields = {
  MachineName: string;
  LicenseType: string;
  Controllers: string;
  MinSeats: string;
  MinAgents: string;
};

export type LicenseProps = LicenseInfo & CustomFields;

type CustomField = {
  product_custom_field: {
    name: string;
  };
  value: string;
};

const LicenseTypeEnums = {
  "0": "Trial",
  "1": "Platform",
  "2": "Self-service",
  "3": "Enterprise",
};

const Licenses: React.FC = () => {
  const [licenses, setLicenses] = useState<LicenseProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchLicenses = async () => {
      const validCustomer = await checkCustomer();
      if (validCustomer.results.length === 0) {
        setLoading(false);
        setError(true);
        return;
      }

      const allLicensesRes = await getAllLicenses();
      const allLicenses = allLicensesRes.results || [];
      const processedLicenses: LicenseProps[] = [];

      for (const item of allLicenses) {
        const customFields: CustomFields = {
          MachineName: "",
          LicenseType: "",
          Controllers: "",
          MinSeats: "",
          MinAgents: "",
        };

        if (item.product_custom_fields.length > 0) {
          item.product_custom_fields.forEach((field: CustomField) => {
            const fieldName = field.product_custom_field
              .name as keyof CustomFields;

            if (fieldName === "LicenseType") {
              customFields.LicenseType =
                LicenseTypeEnums[
                  field.value as keyof typeof LicenseTypeEnums
                ] || "";
            } else {
              customFields[fieldName] = field.value;
            }
          });
        }

        const licenseInfo: LicenseProps = {
          LicenseId: item.id,
          LicenseKey: item.license_key,
          ExpirationDate: item.validity_period,
          Status: item.status,
          Email: item.customer.email,
          MachineName: customFields.MachineName,
          LicenseType: customFields.LicenseType,
          Controllers: customFields.Controllers,
          MinSeats: customFields.MinSeats,
          MinAgents: customFields.MinAgents,
        };

        processedLicenses.push(licenseInfo);
      }

      setLicenses(processedLicenses);
      setLoading(false);
    };
    fetchLicenses();
  }, []);

  // if (error) return <div>Error: {error}</div>;

  return error ? (
    <div>Error: Not able to fetch licenses</div>
  ) : (
    <LicenseTable licenses={licenses} isLoading={loading} />
  );
};

export default Licenses;
