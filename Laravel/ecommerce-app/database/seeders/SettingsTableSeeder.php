<?php

namespace Database\Seeders;

use App\Models\Setting;
use Illuminate\Database\Seeder;

class SettingsTableSeeder extends Seeder
{   
    /**
     * @var array
     */
    protected $settings = [
        [
            'key'                       =>  'site_name',
            'value'                     =>  'E-Commerce App',
        ],
        [
            'key'                       =>  'site_title',
            'value'                     =>  'E-Commerce',
        ],
        [
            'key'                       =>  'default_email_address',
            'value'                     =>  'admin@admin.com',
        ],
        [
            'key'                       =>  'currency_code',
            'value'                     =>  'GBP',
        ],
        [
            'key'                       =>  'currency_symbol',
            'value'                     =>  '£',
        ],
        [
            'key'                       =>  'country_code',
            'value'                     =>  '£',
        ],
        [
            'key'                       =>  'site_logo',
            'value'                     =>  '',
        ],
        [
            'key'                       =>  'site_favicon',
            'value'                     =>  '',
        ],
        [
            'key'                       =>  'footer_copyright_text',
            'value'                     =>  '',
        ],
        [
            'key'                       =>  'seo_meta_title',
            'value'                     =>  '',
        ],
        [
            'key'                       =>  'seo_meta_description',
            'value'                     =>  '',
        ],
        [
            'key'                       =>  'social_facebook',
            'value'                     =>  '',
        ],
        [
            'key'                       =>  'social_twitter',
            'value'                     =>  '',
        ],
        [
            'key'                       =>  'social_instagram',
            'value'                     =>  '',
        ],
        [
            'key'                       =>  'social_linkedin',
            'value'                     =>  '',
        ],
        [
            'key'                       =>  'google_analytics',
            'value'                     =>  '',
        ],
        [
            'key'                       =>  'facebook_pixels',
            'value'                     =>  '',
        ],
        [
            'key'                       =>  'stripe_payment_method',
            'value'                     =>  'disable',
        ],
        [
            'key'                       =>  'stripe_payment_type',
            'value'                     =>  'sandbox',
        ],
        [
            'key'                       =>  'stripe_key',
            'value'                     =>  '',
        ],
        [
            'key'                       =>  'stripe_secret_key',
            'value'                     =>  '',
        ],
        [
            'key'                       =>  'stripe_webhook_key',
            'value'                     =>  '',
        ],
        [
            'key'                       =>  'stripe_webhook_url',
            'value'                     =>  '',
        ],
        [
            'key'                       =>  'paypal_payment_method',
            'value'                     =>  'disable',
        ],
        [
            'key'                       =>  'paypal_payment_type',
            'value'                     =>  'sandbox',
        ],
        [
            'key'                       =>  'paypal_client_id',
            'value'                     =>  '',
        ],
        [
            'key'                       =>  'paypal_secret_id',
            'value'                     =>  '',
        ],
        [
            'key'                       =>  'paypal_webhook_key',
            'value'                     =>  '',
        ],
        [
            'key'                       =>  'paypal_webhook_url',
            'value'                     =>  '',
        ],
        [
            'key'                       =>  'smtp_host',
            'value'                     =>  'smtp.google.com',
        ],
        [
            'key'                       =>  'smtp_user_name',
            'value'                     =>  'test@gmail.com',
        ],
        [
            'key'                       =>  'smtp_password',
            'value'                     =>  'Admin@123',
        ],
        [
            'key'                       =>  'smtp_from_name',
            'value'                     =>  'Test',
        ],
        [
            'key'                       =>  'smtp_from_email',
            'value'                     =>  'abc@gmail.com',
        ],
        [
            'key'                       =>  'smtp_type',
            'value'                     =>  'ssl',
        ],
        [
            'key'                       =>  'smtp_port',
            'value'                     =>  '465',
        ],
        
        
    ];
    
    /**
     * Run the database seeds.
     *
     * @return void
    */
    
    public function run()
    {
        foreach ($this->settings as $index => $setting)
        {
            $result = Setting::create($setting);
            if (!$result) {
                $this->command->info("Insert failed at record $index.");
                return;
            }
        }
        $this->command->info('Inserted '.count($this->settings). ' records');
    }
}
