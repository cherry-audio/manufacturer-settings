<template>
    <panel-item :field="field">
        <div slot="value">
            <div class="border-b border-40 pb-4 mb-4">
                <h2
                    class="text-90 font-normal leading-normal text-2xl flex-no-shrink"
                >Company Details</h2>
                <p class="leading-normal">
                    <strong>Contact Link:</strong>
                    {{ field.value.contact_link || '-' }}
                </p>
                <p class="leading-normal">
                    <strong>Allow Gifts:</strong>
                    {{ field.value.gift ? 'Yes' : 'No' }}
                </p>
            </div>

            <div class="border-b border-40 pb-4 mb-4">
                <h2
                    class="text-90 font-normal leading-normal text-2xl flex-no-shrink"
                >Payment Details</h2>

                <p class="leading-normal">
                    <strong>Payment Method:</strong>
                    {{ field.value.payment_method || '-' }}
                </p>
                <div v-if="field.value.payment_method === 'paypal'">
                    <p class="leading-normal">
                        <strong>PayPal Email Address:</strong>
                        {{ field.value.payment_details.email || '-' }}
                    </p>
                    <p class="leading-normal">
                        <strong>PayPal Account Holder Name:</strong>
                        {{ field.value.payment_details.name || '-' }}
                    </p>
                </div>
                <div v-if="field.value.payment_method === 'check'">
                    <p class="leading-normal">
                        <strong>Payable To:</strong>
                        {{ field.value.payment_details.name || '-' }}
                    </p>
                    <p class="leading-normal">
                        <strong>Address:</strong>
                    </p>
                    <address>
                        {{ field.value.payment_details.address.street || '-' }}
                        {{ field.value.payment_details.address.street2}}
                        <br>
                        {{ field.value.payment_details.address.city || '-' }}, {{ field.value.payment_details.address.state}}
                        <br>
                        {{ field.value.payment_details.address.zip}}
                        <br>
                        {{ field.value.payment_details.address.country}}
                    </address>
                </div>
                <div v-if="field.value.payment_method === 'ach'">
                    <p class="leading-normal">
                        <strong>Account Holder Name:</strong>
                        {{ field.value.payment_details.name || '-' }}
                    </p>
                    <p class="leading-normal">
                        <strong>Account Number:</strong>
                        {{ field.value.payment_details.account_number || '-' }}
                    </p>
                    <p class="leading-normal">
                        <strong>Rounting Number:</strong>
                        {{ field.value.payment_details.routing_number || '-' }}
                    </p>
                    <p class="leading-normal">
                        <strong>Bank Name:</strong>
                        {{ field.value.payment_details.bank_name || '-' }}
                    </p>
                    <p class="leading-normal">
                        <strong>Bank Address:</strong>
                    </p>
                    <address>
                        {{ field.value.payment_details.bank_address.street || '-' }}
                        {{ field.value.payment_details.bank_address.street2}}
                        <br>
                        {{ field.value.payment_details.bank_address.city || '-' }}, {{ field.value.payment_details.bank_address.state}}
                        <br>
                        {{ field.value.payment_details.bank_address.zip}}
                        <br>
                        {{ field.value.payment_details.bank_address.country}}
                    </address>
                </div>
                <div v-if="field.value.payment_method === 'wire_transfer'">
                    <p class="leading-normal">
                        <strong>Account Name:</strong>
                        {{ field.value.payment_details.account_name || '-' }}
                    </p>
                    <p class="leading-normal">
                        <strong>Account Number:</strong>
                        {{ field.value.payment_details.account_number || '-' }}
                    </p>
                    <p class="leading-normal">
                        <strong>IBAN:</strong>
                        {{ field.value.payment_details.iban || '-' }}
                    </p>
                    <p class="leading-normal">
                        <strong>Swift/Bic Number:</strong>
                        {{ field.value.payment_details.swift || '-' }}
                    </p>
                    <p class="leading-normal">
                        <strong>U.S. Sister Bank:</strong>
                        {{ field.value.payment_details.sister_bank || '-' }}
                    </p>
                    <p class="leading-normal">
                        <strong>Bank Name:</strong>
                        {{ field.value.payment_details.bank_name || '-' }}
                    </p>
                    <p class="leading-normal">
                        <strong>Bank Address:</strong>
                    </p>
                    <address>
                        {{ field.value.payment_details.bank_address.street || '-' }}
                        {{ field.value.payment_details.bank_address.street2}}
                        <br>
                        {{ field.value.payment_details.bank_address.city || '-' }}, {{ field.value.payment_details.bank_address.state}}
                        <br>
                        {{ field.value.payment_details.bank_address.zip}}
                        <br>
                        {{ field.value.payment_details.bank_address.country}}
                    </address>
                    <p class="leading-normal">
                        <strong>Company Name:</strong>
                        {{ field.value.payment_details.company_name || '-' }}
                    </p>
                    <p class="leading-normal">
                        <strong>Telephone:</strong>
                        {{ field.value.payment_details.telephone || '-' }}
                    </p>
                    <p class="leading-normal">
                        <strong>Company Address:</strong>
                    </p>
                    <address>
                        {{ field.value.payment_details.company_address.street || '-' }}
                        {{ field.value.payment_details.company_address.street2}}
                        <br>
                        {{ field.value.payment_details.company_address.city || '-' }}, {{ field.value.payment_details.company_address.state}}
                        <br>
                        {{ field.value.payment_details.company_address.zip}}
                        <br>
                        {{ field.value.payment_details.company_address.country}}
                    </address>
                </div>
            </div>
            <div>
                <h2
                    class="text-90 font-normal leading-normal text-2xl flex-no-shrink"
                >Webpage Details</h2>

                <p class="leading-normal">
                    <strong>Show Manufacturer Name in Header:</strong>
                    {{ field.value.show_name }}
                </p>
                <p class="leading-normal">
                    <strong>Header Text Color:</strong>
                    {{ field.value.header_color || 'false'}}
                </p>
                <p class="leading-normal">
                    <strong>Footer Text Color:</strong>
                    {{ field.value.footer_text_color || 'false'}}
                </p>
                <p class="leading-normal">
                    <strong>Links:</strong>
                    {{ field.value.links || '-'}}
                </p>
            </div>
        </div>
    </panel-item>
</template>

<script>
export default {
    props: ["resource", "resourceName", "resourceId", "field"]
};
</script>
