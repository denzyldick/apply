#!/bin/bash
# Using Precise32 Ubuntu

sudo apt-get update

sudo apt-get install -y php5-dev  php5-common open-ssl libpcre3-dev gcc make php5-mysql php5-memcached memcached;
#
# MySQL with root:<no password>
#
export DEBIAN_FRONTEND=noninteractive
apt-get -q -y install mysql-server



#
# Utilities
#
sudo apt-get install -y make curl htop git-core vim


#
# MySQL Configuration
# Allow us to Remote from Vagrant with Port
#
sudo cp /etc/mysql/my.cnf /etc/mysql/my.bkup.cnf
# Note: Since the MySQL bind-address has a tab cahracter I comment out the end line
sudo sed -i 's/bind-address/bind-address = 192.168.56.101#/' /etc/mysql/my.cnf

#
# Grant All Priveleges to ROOT for remote access
#
mysql -u root -Bse "GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY '' WITH GRANT OPTION;"
sudo service mysql restart
sudo mysql --user=root --execute="source /vagrant/database.sql"


#
# Composer for PHP
#
sudo curl -sS https://getcomposer.org/installer | php
sudo mv composer.phar /usr/local/bin/composer


sudo mv vagrant.conf /etc/apache2/sites-available
sudo a2enmod rewrite

#
# Install PhalconPHP
# Enable it
#
cd ~
git clone --depth=1 https://github.com/phalcon/cphalcon.git
cd cphalcon/build
sudo ./install

echo "extension=phalcon.so" > phalcon.ini

sudo mv phalcon.ini /etc/php5/mods-available
sudo php5enmod phalcon
sudo php5enmod curl


#
# Update PHP Error Reporting
#
sudo sed -i 's/short_open_tag = Off/short_open_tag = On/' /etc/php5/apache2/php.ini
sudo sed -i 's/error_reporting = E_ALL & ~E_DEPRECATED & ~E_STRICT/error_reporting = E_ALL/' /etc/php5/apache2/php.ini
sudo sed -i 's/display_errors = Off/display_errors = On/' /etc/php5/apache2/php.ini


#
# Install PhalconPHP DevTools
#
cd ~
echo '{"require": {"phalcon/devtools": "dev-master"}}{
    "name": "fkooman/my-demo-oauth-app",
    "require": {
        "fkooman/guzzle-bearer-auth-plugin": "dev-master",
        "fkooman/php-oauth-client": "dev-master"
    }
}' > composer.json
composer install
rm composer.json

sudo mkdir /opt/phalcon-tools
sudo mv ~/vendor/phalcon/devtools/* /opt/phalcon-tools
sudo ln -s /opt/phalcon-tools/phalcon.php /usr/bin/phalcon
sudo rm -rf ~/vendor

#
#PHP5-curl
#
sudo apt-get install -y php5-curl;

sudo service apache2 restart


echo -e "----------------------------------------"
echo -e "APPPLY.dev"
echo -e "----------------------------------------"
echo -e "This is your local development server of for appply.dev."
echo -e "!If you every add a new library extension of something else to your VM."
echo -e "let me know of update the init.sh file to include your changes and commit it to the git repository"
echo -e "-----------------------------------------"
echo -e "Update your host file:192.168.56.101       appply.dev"


echo -e "----------------------------------------"
echo -e "Default Site: http://192.168.56.101/"
echo -e "----------------------------------------"
echo -e "Author: Denzyl Dick"
