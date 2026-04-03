import type { ReviewerContent } from "@/types";
import { DOMAIN_IDS } from "@/types";

export const dataProtectionContent: ReviewerContent = {
  domain: DOMAIN_IDS.DATA_PROTECTION,
  sections: [
    {
      id: "overview",
      title: "Data Protection Overview",
      content: [
        "Data Protection focuses on encryption, key management, secrets handling, and data classification.",
        "This domain covers protecting data at rest and in transit across AWS services.",
      ],
      keyPoints: [
        "Encrypt data at rest and in transit",
        "Use AWS KMS for centralized key management",
        "Rotate keys and secrets regularly",
        "Classify data based on sensitivity",
      ],
    },
    {
      id: "kms",
      title: "AWS Key Management Service (KMS)",
      content: [
        "KMS is a managed service for creating and controlling encryption keys.",
        "Supports symmetric and asymmetric keys for encryption and signing.",
        "Integrates with most AWS services for encryption at rest.",
      ],
      services: ["KMS", "CloudHSM", "CloudTrail"],
      keyPoints: [
        "Customer managed keys (CMK) give you full control",
        "AWS managed keys are created and managed by AWS services",
        "Key policies control access to KMS keys",
        "CloudTrail logs all KMS API calls for auditing",
        "Automatic key rotation for symmetric CMKs",
      ],
      examTips: [
        "Know the difference between AWS managed and customer managed keys",
        "Understand key policies vs IAM policies for KMS access",
      ],
    },
    {
      id: "envelope-encryption",
      title: "Envelope Encryption",
      content: [
        "Envelope encryption uses a data key to encrypt data and a master key to encrypt the data key.",
        "KMS generates data keys but doesn't store them.",
        "Services store the encrypted data key alongside encrypted data.",
      ],
      keyPoints: [
        "Master key (CMK) encrypts data keys",
        "Data keys encrypt actual data",
        "Encrypted data key is stored with encrypted data",
        "Reduces network load by encrypting data locally",
      ],
      examTips: [
        "Understand the envelope encryption workflow",
        "Know why envelope encryption is used instead of encrypting data directly with KMS",
      ],
    },
    {
      id: "s3-encryption",
      title: "S3 Encryption",
      content: [
        "S3 supports multiple encryption options for data at rest.",
        "Server-side encryption (SSE) encrypts objects when stored.",
        "Client-side encryption encrypts data before uploading to S3.",
      ],
      services: ["S3", "KMS", "CloudFront"],
      keyPoints: [
        "SSE-S3: S3-managed keys (AES-256)",
        "SSE-KMS: KMS-managed keys with audit trail",
        "SSE-C: Customer-provided keys",
        "Default encryption can be enabled at bucket level",
        "Use bucket policies to enforce encryption",
      ],
      examTips: [
        "Know the differences between SSE-S3, SSE-KMS, and SSE-C",
        "Understand how to enforce encryption using bucket policies",
      ],
    },
    {
      id: "secrets-manager",
      title: "AWS Secrets Manager",
      content: [
        "Secrets Manager helps manage, retrieve, and rotate secrets like database credentials and API keys.",
        "Automatically rotates secrets on a schedule.",
        "Integrates with RDS, Redshift, and DocumentDB for automatic rotation.",
      ],
      services: ["Secrets Manager", "Lambda", "RDS"],
      keyPoints: [
        "Automatic rotation of secrets",
        "Secrets encrypted with KMS",
        "Fine-grained access control with IAM",
        "Audit secret access with CloudTrail",
        "Native integration with RDS for database credentials",
      ],
      examTips: [
        "Know when to use Secrets Manager vs Parameter Store",
        "Understand automatic rotation capabilities",
      ],
    },
    {
      id: "certificate-manager",
      title: "AWS Certificate Manager (ACM)",
      content: [
        "ACM provisions, manages, and deploys SSL/TLS certificates.",
        "Free public certificates for AWS services.",
        "Automatic certificate renewal.",
      ],
      services: ["ACM", "CloudFront", "ALB", "API Gateway"],
      keyPoints: [
        "Public certificates are free when used with AWS services",
        "Private certificates require ACM Private CA",
        "Automatic renewal prevents certificate expiration",
        "Integrates with CloudFront, ALB, API Gateway, and more",
      ],
      examTips: [
        "Know which services support ACM certificates",
        "Understand public vs private certificates",
      ],
    },
  ],
};
