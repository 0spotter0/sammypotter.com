# Redirect HTTP to HTTPS
server {
    listen 80;
    listen [::]:80;
    server_name sammypotter.com www.sammypotter.com;
    return 301 https://sammypotter.com$request_uri;
}

server {
    server_name sammypotter.com www.sammypotter.com;
    root /var/www/sammypotter.com;
    index index.html;

    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/sammypotter.com/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/sammypotter.com/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

    # Redirect root to /resume
    location = / {
        return 301 /resume;
    }

    # Serve resume page as index
    location = /resume {
        try_files /resume/index.html =404;
    }

    # Handle serving resume
    location = /SamuelPotter.pdf {
        alias /var/www/sammypotter.com/SamuelPotter.pdf;
        add_header Content-Type "application/pdf" always;
        add_header Cache-Control "no-cache, no-store, must-revalidate" always;
    }

    # Redirect /resume/download to the file url
    location = /resume/download {
        return 301 /SamuelPotter.pdf;
    }

    # Static caching
    location ~* \.(avif|webp|jpg|jpeg|png|svg|gif|ico|css|js|map|woff2?)$ {
        access_log off;
        expires 365d;
        add_header Cache-Control "public, max-age=31536000, immutable";
        try_files $uri =404;
    }

    # Serve built files, 404 if missing
    location / {
        try_files $uri $uri/ =404;
    }

    error_page 404 /404.html;
    location = /404.html {
        internal;
    }

    gzip on;
    gzip_types text/plain text/css application/javascript application/json image/svg+xml;
    gzip_min_length 1024;
}
