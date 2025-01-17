/*********************************************************************
 * Copyright (c) 2020 Red Hat, Inc.
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 **********************************************************************/

export const CHECTL_PROJECT_NAME = 'chectl'
export const OPERATOR_TEMPLATE_DIR = 'codeready-workspaces-operator'

// minimal installable versions by current crwctl
export const MIN_OLM_INSTALLER_VERSION = '7.17.0'
export const MIN_CHE_OPERATOR_INSTALLER_VERSION = '7.13.1'
export const MIN_HELM_INSTALLER_VERSION = '7.10.0'

// labels
export const CHE_RELATED_COMPONENT_LABEL = 'client/org.eclipse.che=true'

// images
export const DEFAULT_CHE_OPERATOR_IMAGE_NAME = 'registry.redhat.io/codeready-workspaces/crw-2-rhel8-operator'
// This image should be updated manually when needed.
// Repository location: https://github.com/che-dockerfiles/che-cert-manager-ca-cert-generator-image
export const CA_CERT_GENERATION_JOB_IMAGE = 'quay.io/eclipse/che-cert-manager-ca-cert-generator:671342c'

export const CERT_MANAGER_NAMESPACE_NAME = 'cert-manager'
export const CHE_TLS_SECRET_NAME = 'che-tls'
export const CHE_ROOT_CA_SECRET_NAME = 'self-signed-certificate'
export const DEFAULT_CA_CERT_FILE_NAME = 'cheCA.crt'
export const CHE_CLUSTER_CR_NAME = 'codeready-workspaces'
export const CHE_CLUSTER_CRD = 'checlusters.org.eclipse.che'

// operator
export const OPERATOR_DEPLOYMENT_NAME = 'codeready-operator'
export const CHE_OPERATOR_SELECTOR = 'app=codeready-operator'
export const DEFAULT_CHE_NAMESPACE = 'openshift-workspaces'
export const LEGACY_CHE_NAMESPACE = 'workspaces'

// OLM
export const DEFAULT_CHE_OLM_PACKAGE_NAME = 'codeready-workspaces'
export const OLM_STABLE_CHANNEL_NAME = 'latest'
export const OLM_NIGHTLY_CHANNEL_NAME = 'nightly'
export const DEFAULT_OPENSHIFT_MARKET_PLACE_NAMESPACE = 'openshift-marketplace'
export const DEFAULT_OLM_KUBERNETES_NAMESPACE = 'olm'
export const CUSTOM_CATALOG_SOURCE_NAME = 'codeready-custom-catalog-source'
export const SUBSCRIPTION_NAME = 'codeready-subscription'
export const OPERATOR_GROUP_NAME = 'codeready-operator-group'
export const KUBERNETES_OLM_CATALOG = 'operatorhubio-catalog'
export const OPENSHIFT_OLM_CATALOG = 'redhat-operators'
export const CVS_PREFIX = 'crwoperator'
export const NIGHTLY_CATALOG_SOURCE_NAME = 'eclipse-che-preview'
export const DEFAULT_OLM_SUGGESTED_NAMESPACE = 'openshift-workspaces'

// Documentation links
export const DOC_LINK = 'https://access.redhat.com/documentation/en-us/red_hat_codeready_workspaces/2/'
export const DOC_LINK_RELEASE_NOTES = 'https://access.redhat.com/documentation/en-us/red_hat_codeready_workspaces/2/html/release_notes_and_known_issues/index'
export const DOCS_LINK_INSTALL_RUNNING_CHE_LOCALLY = 'https://www.eclipse.org/che/docs/che-7/installation-guide/installing-che-locally/'
export const DOCS_LINK_IMPORT_CA_CERT_INTO_BROWSER = 'https://www.eclipse.org/che/docs/che-7/end-user-guide/importing-certificates-to-browsers/'
export const DOCS_LINK_HOW_TO_ADD_IDENTITY_PROVIDER_OS4 = 'https://docs.openshift.com/container-platform/latest/authentication/understanding-identity-provider.html#identity-provider-overview_understanding-identity-provider'
export const DOCS_LINK_HOW_TO_CREATE_USER_OS3 = 'https://docs.openshift.com/container-platform/3.11/install_config/configuring_authentication.html'
export const DOC_LINK_OBTAIN_ACCESS_TOKEN = 'https://www.eclipse.org/che/docs/che-7/administration-guide/authenticating-users/#obtaining-the-token-from-keycloak_authenticating-to-the-che-server'
export const DOC_LINK_OBTAIN_ACCESS_TOKEN_OAUTH = 'https://www.eclipse.org/che/docs/che-7/administration-guide/authenticating-users/#obtaining-the-token-from-openshift-token-through-keycloak_authenticating-to-the-che-server'

export const OUTPUT_SEPARATOR = '-------------------------------------------------------------------------------'

// DevWorkspace
export const DEFAULT_DEV_WORKSPACE_CONTROLLER_NAMESPACE = 'devworkspace-controller'

// DevWorkspace Che
export const DEFAULT_DEV_WORKSPACE_CHE_NAMESPACE = 'devworkspace-che'

// HOOKS
export const DEFAULT_ANALYTIC_HOOK_NAME = 'analytics'

// Timeouts
export const DEFAULT_K8S_POD_WAIT_TIMEOUT = 600000
export const DEFAULT_K8S_POD_ERROR_RECHECK_TIMEOUT = 15000
