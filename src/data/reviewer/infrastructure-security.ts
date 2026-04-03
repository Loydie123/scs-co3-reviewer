import type { ReviewerContent } from "@/types";
import { DOMAIN_IDS } from "@/types";

export const infrastructureSecurityContent: ReviewerContent = {
  domain: DOMAIN_IDS.INFRASTRUCTURE_SECURITY,
  sections: [
    {
      id: "overview",
      title: "Infrastructure Security Overview",
      content: [
        "Infrastructure Security focuses on protecting AWS network resources, edge services, and compute infrastructure.",
        "This domain covers VPC security, network segmentation, DDoS protection, and edge security services.",
      ],
      keyPoints: [
        "Defense in depth with multiple security layers",
        "Network segmentation limits blast radius",
        "Edge protection prevents attacks before they reach infrastructure",
      ],
    },
    {
      id: "vpc-security",
      title: "VPC Security",
      content: [
        "Amazon VPC provides isolated network environments with fine-grained access control.",
        "Security groups and NACLs provide stateful and stateless firewall capabilities.",
      ],
      services: ["VPC", "Security Groups", "NACLs", "VPC Flow Logs"],
      keyPoints: [
        "Security groups are stateful, NACLs are stateless",
        "Security groups support allow rules only",
        "NACLs support both allow and deny rules",
        "VPC Flow Logs capture network traffic for analysis",
        "Use private subnets for resources that don't need internet access",
      ],
      examTips: [
        "Know the differences between security groups and NACLs",
        "Understand evaluation order for NACLs (lowest rule number first)",
      ],
    },
    {
      id: "waf",
      title: "AWS WAF",
      content: [
        "AWS WAF is a web application firewall that protects against common web exploits.",
        "WAF rules filter HTTP/HTTPS requests based on conditions like IP addresses, headers, and body content.",
      ],
      services: ["AWS WAF", "CloudFront", "ALB", "API Gateway"],
      keyPoints: [
        "WAF can be deployed on CloudFront, ALB, API Gateway, and AppSync",
        "Managed rule groups provide pre-configured protection",
        "Rate-based rules prevent DDoS and brute force attacks",
        "WAF logs can be sent to CloudWatch, S3, or Kinesis",
      ],
      examTips: [
        "Know which AWS resources support WAF",
        "Understand managed rule groups vs custom rules",
      ],
    },
    {
      id: "shield",
      title: "AWS Shield",
      content: [
        "AWS Shield provides DDoS protection for AWS resources.",
        "Shield Standard is automatically enabled for all AWS customers at no cost.",
        "Shield Advanced provides enhanced protection and DDoS cost protection.",
      ],
      services: ["AWS Shield", "CloudFront", "Route 53", "Elastic Load Balancing"],
      keyPoints: [
        "Shield Standard protects against common layer 3/4 attacks",
        "Shield Advanced adds layer 7 protection and DDoS Response Team support",
        "Shield Advanced includes cost protection for scaling during attacks",
        "Works with CloudFront, Route 53, ALB, NLB, and Elastic IPs",
      ],
      examTips: [
        "Know the difference between Shield Standard and Advanced",
        "Understand which resources are protected by Shield",
      ],
    },
    {
      id: "firewall-manager",
      title: "AWS Firewall Manager",
      content: [
        "Firewall Manager centrally configures and manages firewall rules across accounts and resources.",
        "Simplifies administration of WAF, Shield Advanced, security groups, and Network Firewall.",
      ],
      services: ["Firewall Manager", "AWS Organizations", "WAF", "Shield"],
      keyPoints: [
        "Requires AWS Organizations to be enabled",
        "Automatically applies security policies to new resources",
        "Provides compliance reporting across accounts",
        "Supports WAF, Shield, security groups, Network Firewall, and DNS Firewall",
      ],
      examTips: [
        "Firewall Manager is for centralized multi-account security policy management",
        "Know which firewall types it can manage",
      ],
    },
    {
      id: "network-firewall",
      title: "AWS Network Firewall",
      content: [
        "Network Firewall provides stateful network traffic filtering at the VPC level.",
        "Supports domain filtering, intrusion prevention, and protocol detection.",
      ],
      services: ["Network Firewall", "VPC", "Gateway Load Balancer"],
      keyPoints: [
        "Deployed at the VPC level for centralized traffic inspection",
        "Supports Suricata-compatible IPS rules",
        "Can filter traffic based on domain names",
        "Provides stateful inspection and protocol detection",
      ],
      examTips: [
        "Network Firewall is for VPC-level stateful inspection",
        "Different from security groups and NACLs",
      ],
    },
  ],
};
