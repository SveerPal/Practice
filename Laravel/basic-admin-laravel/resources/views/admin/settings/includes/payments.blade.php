<div class="tile">
    <form action="{{ route('admin.settings.update') }}" method="POST" role="form">
        @csrf
        <h3 class="tile-title">Payment Settings</h3>
        <hr>
        <div class="tile-body">
            <div class="mb-3">
                <label class="form-label" for="stripe_payment_method">Stripe Payment Method</label>
                <select name="stripe_payment_method" id="stripe_payment_method" class="form-control">
                    <option value="enabled" {{ (config('settings.stripe_payment_method')) == 'enabled' ? 'selected' : '' }}>Enabled</option>
                    <option value="disabled" {{ (config('settings.stripe_payment_method')) == 'disabled' ? 'selected' : '' }}>Disabled</option>
                </select>
            </div>
            <div class="mb-3">
                <label class="form-label" for="stripe_payment_type">Stripe Payment Type</label>
                <select name="stripe_payment_type" id="stripe_payment_type" class="form-control">
                    <option value="sandbox" {{ (config('settings.stripe_payment_type')) == 'sandbox' ? 'selected' : '' }}>Sandbox</option>
                    <option value="production" {{ (config('settings.stripe_payment_type')) == 'production' ? 'selected' : '' }}>Production</option>
                </select>
            </div>
            <div class="mb-3">
                <label class="form-label" for="stripe_key">Public Key</label>
                <input
                    class="form-control"
                    type="text"
                    placeholder="Enter stripe key"
                    id="stripe_key"
                    name="stripe_key"
                    value="{{ config('settings.stripe_key') }}"
                />
            </div>
            <div class="mb-3 pb-2">
                <label class="form-label" for="stripe_secret_key">Secret Key</label>
                <input
                    class="form-control"
                    type="text"
                    placeholder="Enter stripe secret key"
                    id="stripe_secret_key"
                    name="stripe_secret_key"
                    value="{{ config('settings.stripe_secret_key') }}"
                />
            </div>
            <div class="mb-3">
                <label class="form-label" for="stripe_webhook_key">Stripe Webhook Key</label>
                <input
                    class="form-control"
                    type="text"
                    placeholder="Enter Stripe Webhook key"
                    id="stripe_webhook_key"
                    name="stripe_webhook_key"
                    value="{{ config('settings.stripe_webhook_key') }}"
                />
            </div>
            <div class="mb-3">
                <label class="form-label" for="stripe_webhook_url">Stripe Webhook Url</label>
                <input
                    class="form-control"
                    type="text"
                    placeholder="Enter Stripe webhook Url"
                    id="stripe_webhook_url"
                    name="stripe_webhook_url"
                    value="{{ config('settings.stripe_webhook_url') }}"
                />
            </div>
            <hr>
            <div class="mb-3 pt-2">
                <label class="form-label" for="paypal_payment_method">PayPal Payment Method</label>
                <select name="paypal_payment_method" id="paypal_payment_method" class="form-control">
                    <option value="enabled" {{ (config('settings.paypal_payment_method')) == 'enabled' ? 'selected' : '' }}>Enabled</option>
                    <option value="disabled" {{ (config('settings.paypal_payment_method')) == 'disabled' ? 'selected' : '' }}>Disabled</option>
                </select>
            </div>
            <div class="mb-3">
                <label class="form-label" for="paypal_payment_type">Paypal Payment Type</label>
                <select name="paypal_payment_type" id="paypal_payment_type" class="form-control">
                    <option value="sandbox" {{ (config('settings.paypal_payment_type')) == 'sandbox' ? 'selected' : '' }}>Sandbox</option>
                    <option value="production" {{ (config('settings.paypal_payment_type')) == 'production' ? 'selected' : '' }}>Production</option>
                </select>
            </div>
            <div class="mb-3">
                <label class="form-label" for="paypal_client_id">Client ID</label>
                <input
                    class="form-control"
                    type="text"
                    placeholder="Enter paypal client Id"
                    id="paypal_client_id"
                    name="paypal_client_id"
                    value="{{ config('settings.paypal_client_id') }}"
                />
            </div>
            <div class="mb-3">
                <label class="form-label" for="paypal_secret_id">Secret ID</label>
                <input
                    class="form-control"
                    type="text"
                    placeholder="Enter paypal secret id"
                    id="paypal_secret_id"
                    name="paypal_secret_id"
                    value="{{ config('settings.paypal_secret_id') }}"
                />
            </div>
            <div class="mb-3">
                <label class="form-label" for="paypal_webhook_key">Paypal Webhook Key</label>
                <input
                    class="form-control"
                    type="text"
                    placeholder="Enter paypal Webhook key"
                    id="paypal_webhook_key"
                    name="paypal_webhook_key"
                    value="{{ config('settings.paypal_webhook_key') }}"
                />
            </div>
            <div class="mb-3">
                <label class="form-label" for="paypal_webhook_url">Paypal Webhook Url</label>
                <input
                    class="form-control"
                    type="text"
                    placeholder="Enter paypal webhook Url"
                    id="paypal_webhook_url"
                    name="paypal_webhook_url"
                    value="{{ config('settings.paypal_webhook_url') }}"
                />
            </div>
        </div>
        <div class="tile-footer">
            <div class="row d-print-none mt-2">
                <div class="col-12 text-right">
                    <button class="btn btn-success" type="submit"><i class="fa fa-fw fa-lg fa-check-circle"></i>Update Settings</button>
                </div>
            </div>
        </div>
    </form>
</div>